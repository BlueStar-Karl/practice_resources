function learn(something) {
    console.log(something)
}

function we(callback,something) {
    something += ' is cool'
    callback(something)
}

we(learn, 'NodeJs')     //具名函数

we(function (something) {   //匿名函数
    console.log(something)
},'Jade')