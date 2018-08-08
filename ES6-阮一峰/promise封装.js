/*
* Promise 主要就是为了解决异步回调的问题。用 Promise 来处理异步回调使得代码层次清晰，便于理解，且更加容易维护
*
* Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例：
*   只有这些实例的状态都变成resolved，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数
*
* Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例:
*   只要Promise实例参数之中有一个实例率先改变状态，p的状态就跟着改变
* */

//初步构建
function Promise(fn){

    //需要一个成功的回调
    var callback;

    //一个实例的方法，用来注册异步事件
    this.then = function (done) {
        callback = done;
    }
    
    function resolve() {
        callback()
    }
    fn(resolve)

}

//加入链式调用
//下面加入链式，成功回调的方法就得变成数组才能存储。同时我们给 resolve 方法添加参数，这样就不会输出 undefined。
function Promise(fn) {
    var promise = this,
        value = null
    promise._resolves = [];
    this.then = function (onFulfilled) {
        promise._resolves.push(onFulfilled);
        return this;
    }
    function resolve(value) {
        promise._resolves.forEach(function (callback) {
            callback(value)
        });
    }
    fn(resolve)
}

/*但是，目前的 Promise 还存在一些问题，如果我传入的是一个不包含异步操作的函数，resolve就会先于 then 执行，也就是说 promise._resolves 是一个空数组。
为了解决这个问题，我们可以在 resolve 中添加 setTimeout，来将 resolve 中执行回调的逻辑放置到 JS 任务队列末尾*/
function resolve(value) {
    setTimeout(function() {
        promise._resolves.forEach(function (callback) {
            callback(value);
        });
    },0);
}

//引入状态
function Promise(fn) {
    var promise = this,
        value = null;
    promise._resolves = [];
    promise._status = 'PENDING';

    this.then = function (onFulfilled) {
        if (promise._status === 'PENDING') {
            promise._resolves.push(onFulfilled);
            return this;
        }
        onFulfilled(value);
        return this;
    };


    function resolve(value) {
        setTimeout(function(){
            promise._status = "FULFILLED";
            promise._resolves.forEach(function (callback) {
                value = callback(value);
            })
        },0);
    }

    fn(resolve);
}

//串行 Promise
//串行 Promise 是指在当前 promise 达到 fulfilled 状态后，即开始进行下一个 promise（后邻 promise）。例如我们先用ajax从后台获取用户的的数据，再根据该数据去获取其他数据。
//我们的 then 里面函数不能对 Promise 对象进行处理。这里我们需要再次对 then 进行修改，使其能够处理 promise 对象
//这里我们主要对 then 方法进行改造：

this.then = function (onFulfilled) {
    return new Promise(function(resolve) {
        function handle(value) {
            var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;
            if( ret && typeof ret ['then'] == 'function'){
                ret.then(function(value){
                    resolve(value);
                });
            } else {
                resolve(ret);
            }
        }
        if (promise._status === 'PENDING') {
            promise._resolves.push(handle);
        } else if(promise._status === FULFILLED){
            handle(value);
        }
    })

};


//失败处理
//异步操作不可能都成功，在异步操作失败时，标记其状态为 rejected，并执行注册的失败回调。
//有了之前处理 fulfilled 状态的经验，支持错误处理变得很容易。毫无疑问的是，在注册回调、处理状态变更上都要加入新的逻辑

this.then = function (onFulfilled, onRejected) {
    return new Promise(function(resolve, reject) {
        function handle(value) {
            //.......
        }
        function errback(reason){
            reason = isFunction(onRejected) && onRejected(reason) || reason;
            reject(reason);
        }
        if (promise._status === 'PENDING') {
            promise._resolves.push(handle);
            promise._rejects.push(errback);
        } else if(promise._status === 'FULFILLED'){
            handle(value);
        } else if(promise._status === 'REJECTED') {
            errback(promise._reason);
        }
    })

};

function reject(value) {
    setTimeout(function(){
        promise._status = "REJECTED";
        promise._rejects.forEach(function (callback) {
            promise._reason = callback( value);
        })
    },0);
}


/*
* 完整代码
* */
(function(window,undefined){

// resolve 和 reject 最终都会调用该函数
    var final = function(status,value){
        var promise = this, fn, st;

        if(promise._status !== 'PENDING') return;

        // 所以的执行都是异步调用，保证then是先执行的
        setTimeout(function(){
            promise._status = status;
            st = promise._status === 'FULFILLED'
            queue = promise[st ? '_resolves' : '_rejects'];

            while(fn = queue.shift()) {
                value = fn.call(promise, value) || value;
            }

            promise[st ? '_value' : '_reason'] = value;
            promise['_resolves'] = promise['_rejects'] = undefined;
        });
    }


//参数是一个函数，内部提供两个函数作为该函数的参数,分别是resolve 和 reject
    var Promise = function(resolver){
        if (!(typeof resolver === 'function' ))
            throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
        //如果不是promise实例，就new一个
        if(!(this instanceof Promise)) return new Promise(resolver);

        var promise = this;
        promise._value;
        promise._reason;
        promise._status = 'PENDING';
        //存储状态
        promise._resolves = [];
        promise._rejects = [];

        //
        var resolve = function(value) {
            //由于apply参数是数组
            final.apply(promise,['FULFILLED'].concat([value]));
        }

        var reject = function(reason){
            final.apply(promise,['REJECTED'].concat([reason]));
        }

        resolver(resolve,reject);
    }

    Promise.prototype.then = function(onFulfilled,onRejected){
        var promise = this;
        // 每次返回一个promise，保证是可thenable的
        return new Promise(function(resolve,reject){

            function handle(value) {
                // 這一步很關鍵，只有這樣才可以將值傳遞給下一個resolve
                var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;

                //判断是不是promise 对象
                if (ret && typeof ret ['then'] == 'function') {
                    ret.then(function(value) {
                        resolve(value);
                    }, function(reason) {
                        reject(reason);
                    });
                } else {
                    resolve(ret);
                }
            }

            function errback(reason){
                reason = typeof onRejected === 'function' && onRejected(reason) || reason;
                reject(reason);
            }

            if(promise._status === 'PENDING'){
                promise._resolves.push(handle);
                promise._rejects.push(errback);
            }else if(promise._status === FULFILLED){ // 状态改变后的then操作，立刻执行
                callback(promise._value);
            }else if(promise._status === REJECTED){
                errback(promise._reason);
            }
        });
    }

    Promise.prototype.catch = function(onRejected){
        return this.then(undefined, onRejected)
    }

    Promise.prototype.delay = function(ms,value){
        return this.then(function(ori){
            return Promise.delay(ms,value || ori);
        })
    }

    Promise.delay = function(ms,value){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(value);
                console.log('1');
            },ms);
        })
    }

    Promise.resolve = function(arg){
        return new Promise(function(resolve,reject){
            resolve(arg)
        })
    }

    Promise.reject = function(arg){
        return Promise(function(resolve,reject){
            reject(arg)
        })
    }

    Promise.all = function(promises){
        if (!Array.isArray(promises)) {
            throw new TypeError('You must pass an array to all.');
        }
        return Promise(function(resolve,reject){
            var i = 0,
                result = [],
                len = promises.length,
                count = len

            //这里与race中的函数相比，多了一层嵌套，要传入index
            function resolver(index) {
                return function(value) {
                    resolveAll(index, value);
                };
            }

            function rejecter(reason){
                reject(reason);
            }

            function resolveAll(index,value){
                result[index] = value;
                if( --count == 0){
                    resolve(result)
                }
            }

            for (; i < len; i++) {
                promises[i].then(resolver(i),rejecter);
            }
        });
    }

    Promise.race = function(promises){
        if (!Array.isArray(promises)) {
            throw new TypeError('You must pass an array to race.');
        }
        return Promise(function(resolve,reject){
            var i = 0,
                len = promises.length;

            function resolver(value) {
                resolve(value);
            }

            function rejecter(reason){
                reject(reason);
            }

            for (; i < len; i++) {
                promises[i].then(resolver,rejecter);
            }
        });
    }

    window.Promise = Promise;

})(window);


