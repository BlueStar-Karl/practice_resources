// <script src='a.js></script>
// <script src='b.js></script>
// <script src='c.js></script>

//同步:按顺序执行
// var i= 0;
// while (true) {
//     i++;
// }

//异步
var c = 0;
function printIt() {
    console.log(c)
}
function plus(callback) {
    setTimeout(function () {
        c += 1;
        callback()
    },1000)
}
plus(printIt)
