var http = require('http');

http
    //创建服务器
    .createServer(function (req, res) {
        //响应头
        res.writeHead(200, {'Content-Type': 'text/plain'});
        //响应主体
        res.write('Hello World!');
        //响应结束
        res.end()
    })
    //监听
    .listen(2015)