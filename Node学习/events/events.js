var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

//对一个事件的监听，不要超过10个监听器，否则会警告；可以通过setMaxListeners()方法修改最大数量
life.setMaxListeners(11)

//监听事件，可以用addEventLister取代
function water (who) {

    console.log('给' + who + '倒水')

}
life.on('求安慰', water);
life.on('求安慰', function (who) {
    console.log('给' + who + '..2')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..3')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..4')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..5')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..6')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..7')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..8')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..9')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..10')
})
life.on('求安慰', function (who) {
    console.log('给' + who + '..干活太多了，累死了！')
})

life.on('求溺爱', function (who) {
    console.log('给' + who + '买衣服')
})
life.on('求溺爱', function (who) {
    console.log('给' + who + '买包包')
})

//移除事件监听，必须使用具名函数的形式
//移除某一个事件监听器
life.removeListener('求安慰', water)
//移除某一个事件的所有监听器
life.removeAllListeners('求安慰')
//移除所有的事件监听器
life.removeAllListeners()

//触发事件，并传递参数
var hasConfortListener = life.emit('求安慰', '汉子')
var hasLovedListener = life.emit('求溺爱', '妹子')
var hasPlayedListener = life.emit('求玩坏', '妹子和汉子')

//查询事件监听的个数
//方法一
console.log(life.listeners('求安慰').length)
//方法二
console.log(EventEmitter.listenerCount(life, '求安慰'))



// console.log(hasConfortListener);
// console.log(hasLovedListener);
// console.log(hasPlayedListener);