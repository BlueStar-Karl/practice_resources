# 一.概述

1. 简单来说,**NodeJs**就是运行在**服务端**的**JavaScript**。
2. NodeJs 是一个基于 Chrome V8引擎建立的一个平台;V8引擎执行JavaScript优点**速度快,性能好**。
3. NodeJs 是一个**事件驱动**的 I/O 服务端 JavaScript 环境。

## 特点

1. 单线程（主线程起往返调度）  
	主线程：负责解释和执行Javascript代码的线程只有一个  
	工作线程：处理AJAX请求的线程、处理DOM事件的线程、定时器的线程、读与写的线程等。  
	
	单线程和多线程相比：  
	优点：可以避免系统分配多线程以及线程间通信时的开销，可以更高效的利用CPU，降低内存的消耗  
	缺点：一点出现错误会导致整个系统崩溃，不擅长大量的计算，无法利用多核CPU
	
2. 非阻塞I/O	  
	非阻塞I/O，为了提高程序的性能，更好的提高线程的利用率，尽量不让线程空闲着。  
	
3. 事件驱动  
	通过事件或状态的变化来进行应用程序的流程控制  
	通过监听事件的状态变化来做出相应的操作  
	通过主循环加事件触发的方式来运行程序  
	>当进来一个新的请求时，请求将会被压入队列中，然后通过一个循环来检测队列中的事件状态变化，如果检测到有状态变化的事件，那么就执行该事件对应的处理代码，一般就是回调函数。  
	
	NodeJs提供的**绝大多数API**都是基于`事件的、异步的风格`，就是服务器程序的入口也是从connect事件开始。

# 二.创建应用  
使用NodeJs时，我们在实现一个应用，同时还实现了整个HTTP服务器。  
	
## node应用由三部分组成
1. 引入 require 模块：可以使用 require 指令来载入 NodeJs 模块。
2. 创建服务器：服务器可以监听客户端的请求，类似于Apache，Nginx等HTTP服务器。
3. 接收请求与响应请求：客户端可以使用浏览器或终端发送HTTP请求，服务器接收请求后返回相应数据。

（一）引入required  
	```
	var http = require('http');
	```
	
（二）创建服务器  
	```
	http.createServer(function (request,respinse) {  
		response.writeHead(200, {'Content-Type': 'text/plain'});  
		response.end('Hello World\n');  
	}).listen(8888);  
	//终端打印如下信息    
	console.log('Server running at http://127.0.0.1:8888')  
	```
	
# 三.简单的 REST API
	REST 概述  
		REST 即表述性状态传递（英文：Representational State Transfer,简称REST）是Roy Fidlding博士在2000年他的博士论文中提出来的一种软件架构风格。  
		表述性状态转移是一组架构约束条件和原则。满足这些约束性条件和原则的应用程序或设计就是 RESTful，注意REST是风格而不是标准。  
	
	## 实际应用
		1. get接口：localhost:3000/v1/api/training
		2. post接口: localhost:3000/v1/api/training  
		