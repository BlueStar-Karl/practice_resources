(function (window,document) {
    'use strict'
    let jsonp = function (url, data, callback) {

        // 1.将传入的data数据转化为url字符串形式
        // {id:1,name:'zhangsan'} => id=1&name=zhangsan
        let dataString = url.indexof('?') === -1 ? '?' : '&';
        for(var k in data) {
            dataString += k + '=' + data[k] + '&'
        }

        // 2 处理url中的回调函数
        // cbFuncName回调函数的名字 ：my_json_cb_名字的前缀 + 随机数（把小数点去掉）
        let cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.','');
        dataString += 'callback=' + cbFuncName;

        // 3.创建一个script标签并插入到页面
        let scritpEle = document.createElement('script');
        scritpEle.src = url + dataString;

        // 4.本地挂载回调函数
        window[cbFuncName] = function (data) {
            callback(data);
            // 处理完回调函数的数据之后，删除jsonp的script标签
            document.body.removeChild(scritpEle)
        }

        // 5.append到页面中
        document.body.appendChild(scritpEle)

    }


    // 因为jsonp是一个私有函数外部不能调用，所有jsonp函数作文window对象的一个方法，供外部调用
    window.$jsonp = jsonp;

})(window,documet)
