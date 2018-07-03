const http = require('http');

const querystring = require('querysrting');

var postData = querystring.stringify({
    'content': '一起期待下一期的课程！',
    'cid': 348
})

var options = {
    hostname: 'www.imooc.com',
    port: '80',
    path: 'course/docomment',
    method: 'post',
    //需要有具体的header内容
    headers: ''
}

var req = http.request(options, function (res) {
    console.log('Status' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers))

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof  chunk)
    })
    
    res.on('end', function () {
        console.log('评论完毕！');
    })

    res.on('error',function (e) {
        console.log('Error: ' + e.message)
    })


})
req.write(postData);

req.end()