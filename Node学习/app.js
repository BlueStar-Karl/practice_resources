// node创建一个服务器(方法一)
let http = require('http');

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('hello world!')
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888');


// node创建一个服务器(方法二)
/*
const http = require('http');   //加载模块

const hostname = '127.0.0.1';   //地址
const port = 3000;              //端口

const server = http.createServer((req, res) => {        //创建服务器，成功回调
    //req请求，res响应
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {       //监听
    console.log(`Server running at http://${hostname}:${port}/`);
});*/
