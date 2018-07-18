html5有哪些新标签？
<article> 标签定义外部的内容（外部内容如blog,news）。
<aside> 标签定义article以外的内容（可用做文章的侧栏）。
<canvas>使用JavaScript在网页上绘制图形图像。
<details> 用于描述某个文档部分的内容。
<summary> 定义<details>元素标题。
<datalist> 定义选项列表.。
<figure> 对元素进行组合。<figcaption> 定义figure的标题。
<header>定义页眉。 <nav>定义导航。 <footer>定义页脚。
<progress>定义运行中的进度。<audio>标签定义音乐。 <video> 定义视频。
<time> 定义时间。 <section>定义文档中的区段。 <output> 定义输出类型。
选用标签的标准
如果要支持比较老的浏览器（通常是桌面版网页）则不使用新标签
手机平板等网页开发可以使用新标签
不管什么情况下，都应该优先根据语义来选用标签
根据搜索引擎优化的要求和建议选用标签


简述一下你对HTML语义化的理解？
1、用正确的标签做正确的事情。
2、使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
3、即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
4、html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
5、搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;


你能描述一下当你制作一个网页的工作流程吗？
1、内容分析：分清展现在网络中内容的层次和逻辑关系
2、结构设计：写出合理的html结构代码
3、布局设计：使用html+css进行布局
4、样式设计：首先要使用reset.css
5、交互设计：鼠标特效。行为设计：js代码，ajax页面行为和从服务器获取数据。最后测试兼容性。优化性能


你如何对网站的文件和资源进行优化？
1、文件合并； 2、文件最小化/文件压缩；3、使用 CDN 托管；4、缓存的使用；5、其他


请说出三种减少页面加载时间的方法。（加载时间指感知的时间或者实际加载时间）
1.使用CDN
2.服务器开启gzip压缩
3.css样式的定义放置在文件头部
4.Javascript脚本放在文件末尾
5.压缩Javascript、CSS代码
6.尽可能减少DOM元素
7.尽量减少页面中重复的HTTP请求数量
8.使用多域名负载网页内的多个文件、图片
9.在服务器配置 Entity-Tag if-none-match
10.在服务器端配置 control-cache last-modify-date


23条Web性能优化最佳实践和规则
1.尽可能减少HTTP请求次数
2.使用CDN
3.避免使用src和href标签
4.加入 Expires 或 Cache-Control Header
5.使用Gzip压缩
6.在html文件顶部放置样式表
7.在html文件底部放置Javascript脚本
8.避免使用CSS表达式
9.使用外部Javascript和CSS外部文件
10.减少使用DNS查找次数
11.精简Javascript和CSS
12.避免重定向
13.移除重复的脚本
14.配置ETag
15.缓存AJAX
16.使用GET完成AJAX请求
17.减少DOM元素数量
18.避免404
19.减少Cookie大小
20.使用无Cookie的域
21.避免使用滤镜
22.不要在HTML中缩放图片
23.使用小favicon.ico文件，并让其可缓存


如何进行网站性能优化
content方面
1 .减少HTTP请求：合并文件、CSS精灵、inline Image
2 .减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
3 .避免重定向：多余的中间访问
4 .使Ajax可缓存
5 .非必须组件延迟加载
6 .未来所需组件预加载
7 .减少DOM元素数量
8 .将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
9 .减少iframe数量
10 .不要404
Server方面
11 .使用CDN
12 .添加Expires或者Cache-Control响应头
13 .对组件使用Gzip压缩
14 .配置ETag
15 .Flush Buffer Early
16 .Ajax使用GET进行请求
17 .避免空src的img标签
Cookie方面
18 .减小cookie大小
19 .引入资源的域名不要包含cookie
css方面
20 .将样式表放到页面顶部 　　
21 .不使用CSS表达式
22 .使用不使用@import　　　
23 .不使用IE的Filter
Javascript方面
24 .将脚本放到页面底部　　
25 .将javascript和css从外部引入
26 .压缩javascript和css　　
27 .删除不需要的脚本
28 .减少DOM访问 　　　　
29 .合理设计事件监听器
图片方面
30 .优化图片：根据实际颜色需要选择色深、压缩 　　
31 .优化css精灵
32 .不要在HTML中拉伸图片 　　　　　　　　　　　
33 .保证favicon.ico小并且可缓存
移动方面
34 .保证组件小于25k 　　　
35 .Pack Components into a Multipart Document

请尽可能完整得描述下从输入URL到整个网页加载完毕及显示在屏幕上的整个流程
1 把URL分割成几个部分：协议、网络地址、资源路径。
　　其中网络地址指示该连接网络上哪一台计算机，可以是域名或者IP地址，可以包括端口号；
　　协议是从该计算机获取资源的方式，常见的是HTTP、FTP，不同协议有不同的通讯内容格式；
　　资源路径指示从服务器上获取哪一项资源。
　　例如：http://www.guokr.com/question/554991/
　　协议部分：http 　　网络地址：www.guokr.com 　　资源路径：/question/554991/
2） 如果地址不是一个IP地址，通过DNS（域名系统）将该地址解析成IP地址。
　　IP地址对应着网络上一台计算机，DNS服务器本身也有IP，你的网络设置包含DNS服务器的IP。
　　例如：www.guokr.com 不是一个IP，向DNS询问请求www.guokr.com 对应的IP，获得IP： 111.13.57.142。
　　这个过程里，你的电脑直接询问的DNS服务器可能没有www.guokr.com 对应的IP，就会向它的上级服务器询问，上级服务器同样可能没有，就依此一层层向上找，最高可达根节点，找到或者全部找不到为止。
3） 如果地址不包含端口号，根据协议的默认端口号确定一个。
　　端口号之于计算机就像窗口号之于银行，一家银行有多个窗口，每个窗口都有个号码，不同窗口可以负责不同的服务。
　　端口只是一个逻辑概念，和计算机硬件没有关系。 例如：www.guokr.com 不包含端口号，http协议默认端口号是80。
　　如果你输入的url是http://www.guokr.com:8080/ ，那表示不使用默认的端口号，而使用指定的端口号8080。
4） 向2和3确定的IP和端口号发起网络连接。 例如：向111.13.57.142的80端口发起连接
5） 根据http协议要求，组织一个请求的数据包，里面包含大量请求信息，包括请求的资源路径、你的身份 例如：用自然语言来表达这个数据包，大概就是：请求 /question/554991/ ，我的身份是xxxxxxx。
6） 服务器响应请求，将数据返回给浏览器。数据可能是根据HTML协议组织的网页，里面包含页面的布局、文字。
　　数据也可能是图片、脚本程序等。现在你可以用浏览器的“查看源代码”功能，感受一下服务器返回的是什么东东。
　　如果资源路径指示的资源不存在，服务器就会返回著名的404错误。
7） 如果（6）返回的是一个页面，根据页面里一些外链的URL，例如图片的地址，按照（1）－（6）再次获取。
8） 开始根据资源的类型，将资源组织成屏幕上显示的图像，这个过程叫渲染，网页渲染是浏览器最复杂、最核心的功能。
9） 将渲染好的页面图像显示出来，并开始响应用户的操作。
以上只是最基本的步骤，实际不可能就这么简单，一些可选的步骤例如网页缓存、连接池、加载策略、加密解密、代理中转等等都没有提及。
　　即使基本步骤本身也有很复杂的子步骤，TCP/IP、DNS、HTTP、HTML：每一个都可以展开成庞大的课题，而浏览器的基础——操作系统、编译器、硬件等更是一个比一个复杂。
　　不是计算机专业的同学看了上面的解释完全不明白是很正常的，可能会问为什么要搞得那么复杂，但我保证这每一个步骤都经过深思熟虑和时间的考验。
　　你输入URL即可浏览互联网，而计算机系统在背后做了无数你看不到的工作，计算机各个子领域无数工程师为此付出你难以想象的努力。

html5有哪些新特性、移除了哪些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
绘画 canvas 用于媒介回放的 video 和 audio 元素
sessionStorage 的数据在浏览器关闭后自动删除
本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
语意化更好的内容元素，比如 article、footer、header、nav、section
表单控件，calendar、date、time、email、url、search
新的技术：webworker, websockt, Geolocation
移除的元素
纯表现的元素：basefont，big，center，font, s，strike，tt，u；
对可用性产生负面影响的元素：frame，frameset，noframes；
支持HTML5新标签；
兼容性：
IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持HTML5新标签，
浏览器支持新标签后，还需要添加标签默认的样式：
当然最好的方式是直接使用成熟的框架、使用最多的是 html5shim 框架
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>;
<![endif]-->
如何区分： DOCTYPE声明\新增的结构元素\功能元素
iframe 有哪些缺点？
1)iframe 会阻塞主页面的 Onload 事件；
2)搜索引擎的检索程序无法解读这种页面，不利于SEO；
3)iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载；
　使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以可以绕开以上两个问题。
如何实现浏览器内多个标签页之间的通信? (阿里)
WebSocket、SharedWorker；也可以调用localstorge、cookies等本地存储方式；
localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信；
注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常；
webSocket如何兼容低浏览器？(阿里)
Adobe Flash Socket 、 ActiveX HTMLFile (IE) 、 基于 multipart 编码发送 XHR 、 基于长轮询的 XHR
常见的浏览器内核有哪些？
Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]。bug多，对w3c标准的支持不是很好。
Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等。支持很多复杂网页效果，但是能耗高，占内存。
Webkit内核：Safari,Chrome等。[ Chrome的：Blink（WebKit的分支）]。速度仅次于presto，兼容性较好。
Presto内核：Opera7及以上。[Opera内核原为：Presto，现为：Blink;]。公认的浏览网页速度最快的内核，处理js时比其他内核快3倍左右。但是网页兼容性不太好。
前端需要注意哪些SEO
SEO是由英文Search Engine Optimization缩写而来，中文意译为“搜索引擎优化”。SEO是指通过站内优化比如网站结构调整、网站内容建设、网站代码优化等以及站外优化。
1、合理的title、description、keywords：
　 搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；
　 description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；keywords列举出重要关键词即可
2、语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
3、重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
4、重要内容不要用js输出：爬虫不会执行js获取内容
5、少用iframe：搜索引擎不会抓取iframe中的内容
6、非装饰性图片必须加alt
7、提高网站速度：网站速度是搜索引擎排序的一个重要指标

HTTP 请求方式有哪些?
常用的是GET和POST
1、GET是最常用的方法，通常用于请求服务器发送某个资源。
2、HEAD与GET类似，但服务器在响应中值返回首部，不返回实体的主体部分
3、PUT让服务器用请求的主体部分来创建一个由所请求的URL命名的新文档，或者，如果那个URL已经存在的话，就用干这个主体替代它
4、POST起初是用来向服务器输入数据的。实际上，通常会用它来支持HTML的表单。表单中填好的数据通常会被送给服务器，然后由服务器将其发送到要去的地方。
5、TRACE会在目的服务器端发起一个环回诊断，最后一站的服务器会弹回一个TRACE响应并在响应主体中携带它收到的原始请求报文。TRACE方法主要用于诊断，用于验证请求是否如愿穿过了请求/响应链。
6、OPTIONS方法请求web服务器告知其支持的各种功能。可以查询服务器支持哪些方法或者对某些特殊资源支持哪些方法。
7、DELETE请求服务器删除请求URL指定的资源

GET和POST的区别，何时使用POST？
1 get是从服务器获取数据 ---"取"; post是向服务器提交数据 ---“发”
2 form表单默认的method为"GET"
3 get将参数按照variable=value 的形式，加在URL的后面，中间用"?"连接，多个参数之间用"&"连接;
　比如：http://www.zhiyou100.com/login?username=Tom&password=123
post将数据不像get方式那样，post 发给服务器的参数全部放在请求体中
4 参照上面3的数据传输方式，可以得出：post安全性相对比get方式要高
5 URL不存在参数上限的问题，HTTP协议没有对URL长度进行限制，限制的是部分浏览器和服务器的限制。
　 IE对URL长度的限制为2083KB
6 get方式是通过URL传输的数据的，数据量一般在2KB左右，但是执行效率比post高
7 理论上post方式没有大小限制，HTTP协议规范也没进行大小限制。post数据没有限制，限制的是服务器处理程序的能力

HTTP请求报文和响应报文都包括什么？
1、http请求：客户端向服务器索要数据
请求行：请求方法，请求资源路径，http协议版本
请求头：包含了对客户端的环境描述，客户端请求的主机地址等信息。
请求体：客户端发给服务器的具体数据。
2、http响应：服务器返回给客户端数据
状态行：http协议的版本、状态码、状态码的英文名称
响应头：包含了对服务器的一些描述，对返回数据的描述。
响应体：服务器返回给客户端的具体数据。
HTTP状态码
状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：
1XX: 信息响应类 表示 接收到请求并且继续处理
2XX: 处理成功响应类 表示动作被成功接，理解和接受
3XX: 重定向响应类 为了完成指宝的动作 必须接受进一步处理
4XX: 客户端错误， 客户请求包含的语法错误或者是不能正确执行
5XX: 服务器端错误，服务器不能正确定执行一个正确的请求
常见状态代码、状态描述、说明：
200 OK 正常返回信息
400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
401 Unauthorized 请求未授权。
403 Forbidden 禁止访问。
404 Not Found 找不到如何与 URI 相匹配的资源。
500 Internal Server Error 最常见的服务器端错误。
503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
前端页面有哪三层构成，分别是什么？作用是什么？
最准确的网页设计思路是把网页分成三个层次，即：结构层、表示层、行为层。
网页的结构层:（structural layer） 由 HTML 或 XHTML 之类的标记语言负责创建。标签，也就是那些出现在尖括号里的单词，对网页内容的语义含义做出了描述，但这些标签不包含任何关于如何显示有关内容的信息。例如，P 标签表达了这样一种语义：这是一个文本段。
网页的表示层:（presentation layer） 由 CSS 负责创建。 CSS 对“如何显示有关内容”的问题做出了回答。
网页的行为层:（behavior layer） 负责回答“内容应该如何对事件做出反应”这一问题。这是 Javascript 语言和 DOM 主宰的领域。
浏览器本地存储与服务器端存储之间的区别
1、其实数据既可以在浏览器本地存储，也可以在服务器端存储。
2、浏览器端可以保存一些数据，需要的时候直接从本地获取，sessionStorage、localStorage和cookie都由浏览器存储在本地的数据。
3、服务器端也可以保存所有用户的所有数据，但需要的时候浏览器要向服务器请求数据。
4、服务器端可以保存用户的持久数据，如数据库和云存储将用户的大量数据保存在服务器端。
5、服务器端也可以保存用户的临时会话数据。服务器端的session机制，如jsp的 session 对象，数据保存在服务器上。实现上，服务器和浏览器之间仅需传递session id即可，服务器根据session id找到对应用户的session对象。会话数据仅在一段时间内有效，这个时间就是server端设置的session有效期。
6、服务器端保存所有的用户的数据，所以服务器端的开销较大，而浏览器端保存则把不同用户需要的数据分布保存在用户各自的浏览器中。
7、浏览器端一般只用来存储小数据，而服务器可以存储大数据或小数据。
8、服务器存储数据安全一些，浏览器只适合存储一般数据。
请描述一下cookies,sessionStorage和localStorage的区别？
1) cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
2) cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
3) sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
存储大小：cookie数据大小不能超过4k。
sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
有效时间：localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
sessionStorage 数据在当前浏览器窗口关闭后自动删除。
cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
谈谈你对预加载的理解？
Web预加载指的是在网页全加载完成之前，在页面优先显示一些主要内容，以提高用户体验。对于一个较庞大的网站，如果没有使用预加载技术，用户界面就会长时间显示一片空白，直到资源加载完成，页面才会显示内容。
例如：可以通过js预先从服务加载图片资源(动态创建Image，设置src属性)，只要浏览器把图片下载到本地，就会被缓存，再次请求相当的src时就会优先寻找浏览器缓存，提高访问速度。
缓存和预加载的区别是什么？
缓存就是把请求过的数据缓存起来，下次请求的时候直接使用缓存内容，提高响应速度；
预加载指的是提前把需要的内容加载完成，访问的时候可以明天提高响应效率，比如图片的预加载
（可以提前加载一定数量的图片，当用户访问图片的时候一般只看前几张，由于是预加载好的，所以速度比较快）
Doctype作用？严格模式与混杂模式如何区分？它们有何意义？有多少种Doctype文档类型？
1，<!DOCTYPE> 声明位于文档中的最前面，处于 标签之前。告知浏览器以何种模式来渲染文档。
2，严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。
3，在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
4，DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。
5，可声明三种文档类型，分别表示严格版本、过渡版本以及基于框架的类型。
HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，
Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。
22.在制作一个Web应用或Web站点的过程中，你是如何考虑他的UI、安全性、高性能、SEO、可维护性以及技术因素的？
1、UI：界面美观，要有个性，考虑用户使用的逻辑要简单，用起来舒适自由。使用习惯要符合大部分用户的习惯，比如少让用户输入，采用选择的方式，提供搜索和提示功能。
2、安全性：对输入进行有效性验证（非法字符，特殊字符）如PHP中的方法htmlspecialchars()将特殊字符（>）转化为html实体，trim()去掉用户输入的不必要字符，stripslashes()去掉用户输入的反斜杠等等。
3、对交互操作进行身份验证和授权（api-key,authtoken）,异常错误处理（向用户反馈单额错误提示不要让攻击者分析出一些网络环境和配置），内存溢出，注入攻击等。
4、高性能：
a. DNS负载均衡
b. HTTP重定向（通过使客户端重定向，来分散和转移请求压力，比如一些下载服务通常都有几个镜像服务器）
c. 分布式缓存
d. 负载均衡：反向代理负载均衡,
e. 数据库扩展：读写分离，垂直分区，水平分区。
f. SEO:选好关键字，描述语言，修饰性图片换成文本，合理使用h1-h6，对图片添加alt属性，链接添加target属性。
g. 可维护性：代码是否容易被理解，是否容易被修改和增加新的功能，当出现问题时是否能快速定位到问题代码。
css部分

CSS3有哪些新特性（包含哪些模块）？
1、圆角border-radius、阴影box-shadow,text-shadow、渐变gradients、过渡transitions、
动画animations、布局multi-columns, flex box, grid layout, Opacity,color(rgb,rgba,hsl,hsla )
2、子串匹配的属性选择器:E[attribute^="value"], E[attribute$="value"], E[attribute="value"]
3、新的伪类：
:target, :enabled 和 :disabled,:checked,:indeterminate,:root,:nth-child 和 :nth-last-child,
:nth-of-type和 :nth-last-of-type,:last-child,:first-of-type 和 :last-of-type,
:only-child 和 :only-of-type,:empty,和 :not
4、伪元素使用两个冒号而不是一个来表示：
:after 变为 ::after, :before 变为 ::before,
:first-letter 变为 ::first-letter, :first-line 变为 ::first-line。
Css3:CSS即层叠样式表。
在网页制作时采用层叠样式表技术，可以有效地对页面的布局、字体、颜色、背景和其它效果实现更加精确的控制。 只要对相应的代码做一些简单的修改，就可以改变同一页面的不同部分，或者页数不同的网页的外观和格式
为什么要初始化CSS样式。
因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
最简单的初始化方法就是： {padding: 0; margin: 0;} （不建议）
淘宝的样式初始化：
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; }
CSS 选择器有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？
1).id选择器（ # myid） 2).类选择器（.myclassname）
3).标签选择器（div, h1, p） 4).相邻选择器（h1 + p）
5).子选择器（ul > li） 6).后代选择器（li a）
7).通配符选择器（ ） 8).属性选择器（a[rel = "external"]）
9).伪类选择器（a: hover, li: nth - child）
可继承的样式：
1、关于文字排版的属性如：font,word-break,letter-spacing,text-align等
2、line-height、color、visibility、cursor等
不可继承的样式：border padding margin width height ;
选择器的优先级：将选择器的权值相加，值越大优先级越高
选择器优先级权值：!important=10000 / style=1000 / #id=100 / .class=10 / tag=1 / =0
优先级就近原则,同权重情况下样式定义最近者为准;
CSS3新增伪类举例：
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child 选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2) 选择属于其父元素的第二个子元素的每个 <p> 元素。
:enabled :disabled 控制表单控件的禁用状态。
:checked 单选框或复选框被选中。

解释下浮动和它的工作原理？列举不同的清除浮动的技巧，并指出它们各自适用的使用场景
浮动让元素脱离文档流，按照指定的方向进行运动，遇到相邻的元素或者父元素的边沿时停下，左浮动left;右浮动right
1.使用空标签清除浮动。<div class=“clear”></div>
这种方法是在所有浮动标签后面添加一个空标签 定义css属性 clear:both. 弊端就是增加了无意义标签。
2.使用overflow。给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。
3.使用after伪对象清除浮动。
.clearfix{zoom: 1;}
.clearfix::after{content: '';display: block;overflow: hidden;clear:both;height:0;}
使用中需注意以下几点。1、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素； 2、content属性是必须的，但其值可以为空
介绍一下标准的CSS的盒子模型？与IE的盒子模型有什么不同的？
1、有两种, IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 pading;
2、盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border). 文档中的每个元素被描绘为矩形盒子。确定其大小,属性——比如颜色、背景、边框,及其位置是渲染引擎的目标。CSS下这些矩形盒子由标准盒模型描述。这个模型描述元素内容占用空间。
盒子有四个边界：外边距边界margin edge, 边框边界border edge, 内边距边界padding edge 与 内容边界content edge。
a.内容区域content area 是真正包含元素内容的区域。位于内容边界的内部,它的大小为内容宽度 或 content-box宽及内容高度或content-box高。 如果 box-sizing 为默认值, width, min-width, max-width, height, min-height 与 max-height 控制内容大小。
b.内边距区域padding area 用内容及可能的边框之间的空白区域扩展内容区域。它位于内边边界内部,通常有背景——颜色或图片（不透明图片盖住背景颜色）.它的大小为 padding-box 宽与 padding-box 高。内边距与内容边界之间的空间由padding-top,padding-right,padding-bottom,padding-left和简写padding控制。
c.边框区域border area 是包含边框的区域,扩展了内边距区域.它位于边框边界内部,大小为 border-box 宽和 border-box 高。由 border-width 及简写属性 border控制。
d.外边距区域margin area用空白区域扩展边框区域,以分开相邻的元素。它的大小为margin-box,margin-top,margin-right,margin-bottom,margin-left及简写属性margin控制。在外边距合并的情况下,由于盒之间共享外边距,外边距不容易弄清楚。
最后注意,对于行内非替换元素,其占用空间（行高）由 line-height 决定,即使有内边距与边框。
display有哪些值？说明他们的作用。position的值relative和absolute定位原点是？absolute与fixed共同点与不同点？
1、display:
block 象块类型元素一样显示。
none 缺省值。象行内元素类型一样显示。
inline-block 象行内元素一样显示,但其内容象块类型元素一样显示。
list-item 象块类型元素一样显示,并添加样式列表标记。
2、position
absolute 生成绝对定位的元素,相对于 static 定位以外的第一个父元素进行定位。
fixed （老IE不支持）生成绝对定位的元素,相对于浏览器窗口进行定位。
relative 生成相对定位的元素,相对于其正常位置进行定位。
static 默认值。没有定位,元素出现在正常的流中
inherit 规定从父元素继承 position 属性的值。
*（忽略 top, bottom, left, right z-index 声明）
3、absolute与fixed共同点与不同点
A、共同点：
1.改变行内元素的呈现方式,display被置为block;
2.让元素脱离普通流,不占据空间;
3.默认会覆盖到非定位元素上;
B、不同点：
absolute的”根元素“是可以设置的,会随着参照对象元素的高度和宽度变化而变化
fixed的”根元素“固定为浏览器窗口。当你滚动网页,fixed元素与浏览器窗口之间的距离是不变的。
display:none和visibility:hidden的区别？
display:none 隐藏对应的元素,在文档布局中不再给它分配空间,它各边的元素会合拢,就当他从来不存在。
visibility:hidden 隐藏对应的元素,但是在文档布局中仍保留原来的空间。
解释下 CSS sprites,以及你要如何在页面或网站中使用它？
CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中;再利用CSS的“background-image”,“background- repeat,background-position”的组合进行背景定位;background-position可以用数字能精确的定位出背景图片的位置;
这样可以减少很多图片请求的开销,因为请求耗时比较长；
优点：1、减少HTTP请求数,极大地提高页面加载速度;
2、增加图片信息重复度,提高压缩比,减少图片大小;
3、更换风格方便,只需在一张或几张图片上修改颜色或样式即可实现;
缺点：1、图片合并麻烦; 2、维护麻烦,修改一个图片可能需要从新布局整个图片,样式;
什么叫外边距折叠(collapsing margins)？
毗邻的两个或多个margin会合并成一个margin,叫做外边距折叠。规则如下：
1、两个或多个毗邻的普通流中的块元素垂直方向上的margin会折叠
2、浮动元素/inline-block元素/绝对定位元素的margin不会和垂直方向上的其他元素的margin折叠
3、创建了块级格式化上下文的元素,不会和它的子元素发生margin折叠
4、元素自身的margin-bottom和margin-top相邻时也会折叠
如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms
display:inline-block 什么时候会显示间隙？(携程)
移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing
行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
（1）CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，比如div默认display属性值为“block”，成为“块级”元素；span默认display属性值为“inline”，是“行内”元素。
（2）行内元素有：a b span img input select strong；块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
（3）知名的空元素： <br> <hr> <img> <input> <link> <meta> 鲜为人知的是： <area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>

行内元素和块级元素的区别，怎么相互转换？
块级元素：
1、块级元素会独占一行，其宽度自动填满其父元素宽度。

2、可以设置width,height属性。（即使设置了宽度，也是独占一行的，除非用float属性等特殊情况）

3、可以设置margin(外边距)和padding(内边距)。

行内元素：

1、行内元素不会独占一行，相邻的行内元素会排列在同一行里，直到一行排不下，才会换行，其宽度随元素的内容而变化（其宽度由内容撑开）。

2、设置width,height属性无效。

3、水平方向上的padding-left,padding-right,margin-left,margin-right产生边距效果，

但竖直方向的padding-top,padding-bottom,margin-top,margin-bottom不会产生效果。

转换：给行内元素加上 display:block 这样的属性，让行内元素也有每次都从新行开始的属性。

给块级元素加上 display:inline 这样的属性，让块级元素不具有从新行开始的属性。

给行内元素加上 display:inline-block 属性，仍为行内元素，但是可以设置width及height属性等

CSS3中新增了什么布局方式？
弹性布局：flex布局的基本思想是通过flex容器来伸缩控制子项目的宽度和高度，以此来完全填充flex容器的可用空间。子项目的宽高、排列方式等都是通过设置相关属性改变的。

除了上述布局方式外还有什么常用的布局方式？

1、文档流布局方式：这是最基本的布局方式，就是按照文档顺序一个一个地显示，块元素独占一行，内联元素共享一行。

2、浮动布局方式：某个元素浮动之后，其后面的元素就当其不存在而占用其原来的地方，按照原来文档流布局方式布局。

3、定位布局方式：通过position属性定位。

4、框架布局方式：BootStrap

CSS中的calc()有什么作用？用于动态计算宽高。
什么时候使用mm、cm？一个是毫米，一个是厘米，都是绝对长度单位，看网页、打印的需要
如果一个页面即要在屏幕上显示，又要打印，怎么将这2种样式定义在一起？
一般用媒体查询 @media print{}{ h1{color:black;} }

@media print 里面的内容只对打印出来的内容有效，之外的内容就是屏幕显示的样式

或者用<link rel=”stylesheet” href=”css/mainstylesheet.css” media=”all”>

媒体查询除了在打印时使用还在什么情况下使用？响应式布局（不同宽度的设备上使用）
在手机页面上使用图片，宽度为80%，怎么让图片居中？
text-align：center； 或 将其设置为display：block；为其父元素设置margin：0 auto；

手机页面底部工具条中4个图标，怎么均分空间？设边框后最后一个掉下去怎么办？
使用bootstrap里面的class="col col-25" 设置样式box-sizing:border-box;也可设置width：25%

viewport是什么？什么时候使用？有什么作用？
viewport是用户网页的可视区域，做手机页面或响应式设计时<meta name="viewport">,这样设计，用户可以通过平移和缩放来看页面的不同部分

box-sizing什么时候用？常用的值都有什么？
做自适应网页时；区域的大小调整的时候（边框线占据位置），border-box，content-box，inherit

vertical-align什么时候使用？常用的值分别有什么作用？
vertical-align用来定义行内元素的极限相对于该元素所在行的基线的垂直对齐。text-top:把元素的顶端与父元素内容区域的顶端对齐;text-bottom:居下;middle,上下居中;top;bottom;

CSS3中的transform都支持哪些变换效果？
translate(x,y)平移到（x,y），scale(0.5)缩小0.5倍 Rotate(30deg)旋转30度，skew()倾斜 matrix()定义2D转换，matrix3d(x,y,z)定义3D转换 prespective(n)为3D转换元素定义透视视图

CSS3中的transition能否过渡opacity?能否过渡display？
css3中的transition可以过渡opacity，不能过渡display

什么时候使用transition?什么时候使用animation？
当使用js灵活设定动画属性时使用transition；当使用灵活定制多个帧以及循环的时候使用animation

简述bootstrap的栅格系统的特点，
(1) 所有的行必须放在容器中： .container或.container-fluid (2) 分为多行(row)，一行中平均分为12列(col)

(3) 网页内容只能放在列(col)中，不能直接放在行(row) (4) 可以在col中再嵌套row

(5) col分为四大类： col-xs col-sm col-md col-lg

(6) col-md- 值可为1~12，值就为某个列的宽度( */12 )

(7) 可以为一个列指定不同屏幕下的不同宽度

(8) col-lg- 只对大PC屏幕有效；col-md- 对普通PC和大PC屏幕都有效；

col-sm-*  对平板、PC、大PC屏幕都有效； col-xs-*   对手机、平板、PC大PC屏幕都有效
(9) .hidden-lg 当前列只在大PC屏幕下隐藏；.hidden-md 当前列只在PC屏幕下隐藏

.hidden-sm 当前列只在平板屏幕下隐藏； .hidden-xs 当前列只在手机屏幕下隐藏

怎么实现桌面4列、平板2列、手机1列？
1、桌面4 列： .col-lg-3 .col-md-3；2、平板2列： .col-sm-6；3、手机1列： .col-xs-12；4、媒体查询

页面上有一个aside标签，在桌面上是显示的，但平板和手机是隐藏的，怎么实现？
媒体查询 @media(max-width:@screen-sm-max){aside{display:none}}

用过Less吗？它与CSS有什么不同？
less是css预处理语言，增加了变量、函数等特性。将CSS赋予了动态语言的特性，如变量，继承，运算， 函数LESS既可以在客户端上运行 (支持IE 6 、Webkit和Firefox)，也可以借助Node.js或者Rhino在服务端运行。LESS是一个动态的标准CSS样式表语言扩展，其有精简 的代码更容易维护，less相比于css更加灵活。

知道SASS/SCSS吗？它与Less有什么不同？
1.Sass是基于Ruby的，是在服务端处理的，而Less是需要引入less.js来处理Less代码输出Css到浏览器，也可以在开发环节使用Less，然后编译成Css文件，直接放到项目中，也有Less.app、SimpleLess、CodeKit.app这样的工具，也有在线编译地址。

2.变量符不一样，less是@，而Scss是$，而且变量的作用域也不一样

3.输出设置，Less没有；输出设置，Sass提供4中输出选项：nested, compact, compressed 和 expanded。

4.Sass支持条件语句，可以使用if{}else{},for{}循环等等。而Less不支持。

less基于javascript，在客户端处理，sass基于ruby，是在服务端处理的

JavaScript部分

01.javascript有哪几种数据类型

六种基本数据类型：字符串（String）、数字(Number)、布尔(Boolean)、对象(Object)、空（Null）、未定义（undefined）

02.怎么判断一个变量是否是数组？

instanceof() 或者 Array.isArray() 或者 Object.prototype.toString.call(arr)==='[object Array]'

03.从文本框是得到value，怎么转换成整数？怎么转换成小数？整数:parseInt() 小数:parseFloat()

04.整数怎么保留2位小数？保留2位小数后是什么类型2.toFixed(2) 类型 :string

05.typeof(function(){})返回什么？typeof([])返回什么？ Function / object

06.函数内部arguments变量有哪些特性,有哪些属性,如何将它转换为数组

arguments所有函数中都包含的一个局部变量，是一个类数组对象，对应函数调用时的实参。如果函数定义同名参数会在调用时覆盖默认对象

arguments[index]分别对应函数调用时的实参，并且通过arguments修改实参时会同时修改实参

arguments.length为实参的个数（Function.length表示形参长度）

arguments.callee为当前正在执行的函数本身，使用这个属性进行递归调用时需注意this的变化

arguments.caller为调用当前函数的函数（已被遗弃）

转换为数组：var args = Array.prototype.slice.call(arguments, 0);

07.怎样得到浏览器窗口的宽度和高度？（IE和标准下有哪些兼容性的写法）

有三种方法能够确定浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）。

对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：

window.innerHeight - 浏览器窗口的内部高度； window.innerWidth - 浏览器窗口的内部宽度

对于 Internet Explorer 8、7、6、5：

document.documentElement.clientHeight / document.documentElement.clientWidth

或者 document.body.clientHeight / document.body.clientWidth

实用的 JavaScript 方案（涵盖所有浏览器）：

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

08.JS中事件传播过程是什么？怎么阻止事件传播？

事件捕获(事件挖洞)：事件由祖先元素向子元素传递;事件冒泡：事件由子元素向祖先元素传递;

事件捕获和事件冒泡是事件流中的两个阶段，任何事件产生时，如点击一个按钮，将从最顶端的容器开始（一般是html的根节点）。浏览器会向下遍历DOM树直到找到触发事件的元素，一旦浏览器找到该元素，事件流就进入事件目标阶段，该阶段完成后，浏览器会沿DOM树向上冒泡直到最顶层容器，看看是否有其它元素需要使用同一个事件。

通过使用 preventDefault() 方法只取消默认的行为。

通过使用event.stopPropagation() 停止事件的传播，但不会影响同级别的事件监听者，。

通过使用event.stopImmediatePropagation() 立即停止事件的传播，停止同级别的多个事件监听者的调用。

09.栈和堆的区别？

栈区（stack）：由编译器自动分配释放，存放函数的参数值，局部变量的值等。

堆区（heap）：一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收。

堆（数据结构）：堆可以被看成是一棵树，如：堆排序；

栈（数据结构）：一种先进后出的数据结构。

10.document的DOMContentLoaded事件什么时候发生？window的load事件什么时候发生？

document的DOMContentLoaded 所有DOM解析完触发；window的load事件 所有页面元素加载完触发 包括图片

11.什么是原型和原型链，原型链的作用？

在JavaScript中，每个对象都有一个内部属性[prototype],我们通常称之为原型.访问一个对象的原型可以使用ES5中Object.getPrototypeOf方法,或者ES6中的proto属性;

JS运行时在查找可调用的属性和方法时并不只查找一层原型，因为原型本身也是对象，因此JS运行时还会查找原型对象的原型，一直查找到Object的原型为止。这样就构成了一个链式结构，称为原型链。

原型链的作用：通过原型链可以形成类似继承的效果。比如我们新建一个数组,数组的方法就是从数组的原型上继承而来的。

JS的原型链在Angular中还被用于构造作用域链。

12.怎样建立原型链？

//Object.create(proto [, propertiesObject ]) 是E5中提出的一种新的对象创建方式，第一个参数是要继承的原型

ObjFunc.prototype = object.create(baseFunc.prototype)

ObjFunc.prototype.constructor = ObjFunc

12.什么是构造函数？与普通函数有什么区别?

构造函数：是一种特殊的方法、主要用来创建对象时初始化对象，总与new运算符一起使用，创建对象的语句中构造函数的函数名必须与类名完全相同。与普通函数相比只能由new关键字调用，构造函数是类的标示

13.什么是闭包？闭包有什性质？

闭包： 指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

性质：1.函数内再嵌套函数 2.内部函数可以引用外层的参数和变量 3.参数和变量不会被垃圾回收机制回收

说说js中的闭包和变量作用域？

一、变量的作用域

要理解闭包,首先必须理解Javascript特殊的变量作用域。变量的作用域无非就是两种：全局变量和局部变量。Javascript语言的特殊之处,就在于函数内部可以直接读取全局变量。

　　var n=999;    function f1(){alert(n);}    f1(); // 999

另一方面,在函数外部自然无法读取函数内的局部变量。

　　function f1(){var n=999;} alert(n); // error

需要注意:函数内部声明变量的时候,一定要使用var命令。如果不用的话,你实际上声明了一个全局变量！

　　function f1(){n=999; }    f1();  　alert(n); // 999
二、如何从外部读取局部变量？

出于种种原因,我们有时候需要得到函数内的局部变量。但是正常情况下,这是办不到的；只有通过变通方法才能实现。那就是在函数的内部,再定义一个函数。

　　function f1(){    var n=999；function f2(){ alert(n); // 999} }

在上面的代码中,函数f2就被包括在函数f1内部;这时f1内部的所有局部变量,对f2都是可见的;但是反过来就不行,f2内部的局部变量,对f1就是不可见的;这就是Javascript语言特有的"链式作用域"结构（chain scope）;子对象会一级一级地向上寻找所有父对象的变量。所以,父对象的所有变量,对子对象都是可见的,反之则不成立。

既然f2可以读取f1中的局部变量,那么只要把f2作为返回值,我们不就可以在f1外部读取它的内部变量了吗！

　　function f1(){

　　　　var n=999;

　　　　function f2(){

　　　　　　alert(n);

　　　　}

　　　　return f2;

　　}

　　var result=f1();

　　result(); // 999
三、闭包的概念

上一节代码中的f2函数,就是闭包。

各种专业文献上的"闭包"（closure）定义非常抽象,很难看懂。我的理解是,闭包就是能够读取其他函数内部变量的函数。由于在Javascript语言中,只有函数内部的子函数才能读取局部变量,因此可以把闭包简单理解成"定义在一个函数内部的函数"。所以,在本质上,闭包就是将函数内部和函数外部连接起来的一座桥梁。
四、闭包的用途

闭包可以用在许多地方。它的最大用处有两个: 一个是前面提到的可以读取函数内部的变量;另一个就是让这些变量的值始终保持在内存中。怎么来理解这句话呢？请看下面的代码。

　　function f1(){

　　　　var n=999;

　　　　nAdd=function(){n+=1}

　　　　function f2(){

　　　　　　alert(n);

　　　　}

　　　　return f2;

　　}

　　var result=f1();

　　result(); // 999

　　nAdd();

　　result(); // 1000

在这段代码中,result实际上就是闭包f2函数。它一共运行了两次,第一次的值是999,第二次的值是1000。这证明了,函数f1中的局部变量n一直保存在内存中,并没有在f1调用后被自动清除。

为什么会这样呢？原因就在于f1是f2的父函数,而f2被赋给了一个全局变量,这导致f2始终在内存中,而f2的存在依赖于f1,因此f1也始终在内存中,不会在调用结束后,被垃圾回收机制（garbage collection）回收。

这段代码中另一个值得注意的地方,就是"nAdd=function(){n+=1}"这一行,

1、首先在nAdd前面没有使用var关键字,因此nAdd是一个全局变量,而不是局部变量;

2、其次,nAdd的值是一个匿名函数（anonymous function）,而这个匿名函数本身也是一个闭包,

所以nAdd相当于是一个setter,可以在函数外部对函数内部的局部变量进行操作。
五、使用闭包的注意点

1、由于闭包会使得函数中的变量都被保存在内存中,内存消耗很大,所以不能滥用闭包,否则会造成网页的性能问题,在IE中可能导致内存泄露。解决方法是,在退出函数之前,将不使用的局部变量全部删除。

2、闭包会在父函数外部,改变父函数内部变量的值。所以,如果你把父函数当作对象（object）使用,把闭包当作它的公用方法（Public Method）,把内部变量当作它的私有属性（private value）,这时一定要小心,不要随便改变父函数内部变量的值。
六、思考题

如果你能理解下面两段代码的运行结果,应该就算理解闭包的运行机制了。（首先考虑作用域this的指向）

代码片段一。

　　var name = "The Window";

　　var object = {

　　　　name : "My Object",

　　　　getNameFunc : function(){

　　　　　　return function(){

　　　　　　　　return this.name;

　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()());

代码片段二。

　　var name = "The Window";

　　var object = {

　　　　name : "My Object",

　　　　getNameFunc : function(){

　　　　　　var that = this;

　　　　　　return function(){

　　　　　　　　return that.name;

　　　　　　};

　　　　}

　　};
alert(object.getNameFunc()());

14.JSON的了解？XML和JSON的区别？

了解： JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。 它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小；

区别：(1).数据体积方面：JSON相对于XML来讲，数据的体积小，传递的速度更快些。

(2).数据交互方面：JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互。

(3).数据描述方面：JSON对数据的描述性比XML较差。

(4).传输速度方面：JSON的速度要远远快于XML。

15.哪些地方会出现css阻塞,哪些地方会出现js阻塞？

js的阻塞特性：所有浏览器在下载JS的时候,会阻止一切其他活动,比如其他资源的下载,内容的呈现等等。直到JS下载、解析、执行完毕后才开始继续并行下载其他资源并呈现内容。为了提高用户体验,新一代浏览器都支持并行下载JS,但是JS下载仍然会阻塞其它资源的下载（例如.图片,css文件等）。

*由于浏览器为了防止出现JS修改DOM树,需要重新构建DOM树的情况,所以就会阻塞其他的下载和呈现。

*嵌入JS会阻塞所有内容的呈现,而外部JS只会阻塞其后内容的显示,2种方式都会阻塞其后资源的下载。

也就是说外部样式不会阻塞外部脚本的加载,但会阻塞外部脚本的执行。

CSS怎么会阻塞加载了？

CSS本来是可以并行下载的,在什么情况下会出现阻塞加载了(在测试观察中,IE6下CSS都是阻塞加载）

*当CSS后面跟着嵌入的JS的时候,该CSS就会出现阻塞后面资源下载的情况;

*而当把嵌入JS放到CSS前面,就不会出现阻塞的情况了。

根本原因：

*因为浏览器会维持html中css和js的顺序,样式表必须在嵌入的JS执行前先加载、解析完。

*而嵌入的JS会阻塞后面的资源加载,所以就会出现上面CSS阻塞下载的情况。
嵌入JS应该放在什么位置？1、放在底部,虽然放在底部照样会阻塞所有呈现,但不会阻塞资源下载。

2、如果嵌入JS放在head中,请把嵌入JS放在CSS头部。 3、使用defer（只支持IE）

4、不要在嵌入的JS中调用运行时间较长的函数,如果一定要用,可以用setTimeout来调用

16.js中的this指向有什么特点？

js中的this与其它编程语言中的不同，js中的this指向的对象不是固定的，而是可以改变的（通过function对象的call、apply、bind，jQuery的proxy等可以改变this指向）。以下是this的默认指向：

1.定义在全局作用域中的普通函数中的this指向window对象（严格模式下本条无效，参见后面严格模式的说明）

2.事件处理函数中的this指向触发事件的标签元素，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；

3.构造函数中的this指向当前正在创建的对象（严格模式下必须使用new）

4.原型中的函数内的this指向当前实例

其它框架中的函数内的this都有特定的指向，如jQuery.each(func)中func中的this指向当前迭代的标签元素对象。

17.怎么改变this指向？call和apply的区别是什么？call和bind的区别是什么？

随着函数使用场合不同，this的值会发生变化。但是总有一个原则，那就是this指的是调用函数的那个对象。This一般指向当前被调用者。

改变this指向：通过call、apply、bind。

他们的区别：

Call（object，object）调用一个对象的一个方法，以另一个对象替换当前对象。

Apply (thisObj，[argArray]) 应用某一对象的一个方法，用另一个对象替换当前对象。

bind()，它会创建一个函数的实例，其this值会被绑定到传给bind()函数的值。

18.break和 return的区别？

break是用来跳出循环的，例如for，while，do-while都可以跳出，但不跳出函数

return是使整个函数返回的，后面的不管是循环里面还是循环外面的都不执行

break语句通常用在循环语句和开关语句中,当break语句用于do-while、for、while循环语句中时,可使程序终止循环而执行循环后面的语句, 通常break语句总是与if语句联在一起,即满足条件时便跳出循环return语句是将函数的值返回主调函数。

还有一个continue语句的作用是跳过循环本中剩余的语句而强行执行下一次循环。continue语句只用在for、while、do-while等循环体中,常与if条件语句一起使用,用来加速循环

19.简述同步和异步的区别

同步是阻塞模式，异步是非阻塞模式。

同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；

异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

20.创建一个长度为100，值等于索引的数组。

var arr = [0,1,2,…,99];

var arr = new Array(100)； for (var i = 0; i < arr.length; i++) {arr[i] = i;}； arr;

var arr = Object.keys(Array.from({ length: 100 }));

var arr = Object.keys(Array.apply(null,{ length: 100 }));

var arr = Object.keys(Array.from({ length: 100 })).map(function(item){return +item;});

var arr = Array.from(new Array(100).keys());

var arr = [...Array(100).keys()];

var arr = [...Array.from({ length: 100 }).keys()];

23.js跨域请求的方式，能写几种是几种？CORS

1、通过jsonp跨域

2、CORS（Cross-Origin Resource Sharing）跨域资源共享,需要服务器设置header ：Access-Control-Allow-Origin。

3、通过修改document.domain来跨子域

4、使用window.name来进行跨域

5、使用HTML5中新引进的window.postMessage方法来跨域传送数据（ie 67 不支持）

6、nginx反向代理 这个方法一般很少有人提及，但是他可以不用目标服务器配合，不过需要你搭建一个中转nginx服务器，用于转发请求

跨域访问与同源策略

因为在同一个浏览器窗口中能够同时打开多个网站的页面，而且它们都处于同一个会话中，如果不禁止跨域访问则会造成用户隐私数据泄露和登录身份冒用的问题，所以浏览器会使用同源策略限制跨域访问。

在浏览器中，通过JS代码访问不同域名下的URL（JS的XHR/AJAX）或者iframe（JS访问iframe内部的DOM）时，会被禁止访问。而不是通过JS代码进行的跨域访问不存在跨域问题！比如可以跨域加载图片、引用JS文件、下载各种文件、使用iframe跨域嵌入其它网站的页面都是允许的。

跨域访问被禁止有时会给应用开发带来阻碍，但在符合特定条件时也有相应的方法在保证安全的情况下能够解决跨域访问的问题。

1、跨域资源共享（CORS：Cross-Origin Resource Sharing）

在对方的服务器中的响应头中添加 Access-Control-Allow-Origin 允许哪些域进行跨域访问它是值可以是 域名，或者 * 。这种方案只有在对方信任或不在乎（安全）的情况下才能使用。

在用Ionic开发Web App时，通常会遇到浏览器端和服务端分离的情况，这时可使用CORS浏览器插件自动在响应头中添加Access-Control-Allow-Origin头。这样可以轻松实现开发时的跨域。

2、如果域名都是同一个根域名的子域名，则可以使用document.domain = "根域名" 来统一JS执行环境中的域名。这种方案只能在同一个公司或组织的内部使用。

不同的框架之间是可以获取window对象的,但却无法获取相应的属性和方法。

有一个页面,它的地址是http://www.example.com/a.html ,

在这个页面里面有一个iframe,它的src是http://example.com/b.html,

这个页面与它里面的iframe框架是不同域的,所以我们是无法通过在页面中书写js代码来获取iframe中的东西的：

        <script type="text/javascript">     

            function test(){         

                var iframe = document.getElementById('ifame');         

                var win = document.contentWindow;

                //可以获取到iframe里的window对象,但该window对象的属性和方法几乎是不可用的         

                var doc = win.document;//这里获取不到iframe里的document对象         

                var name = win.name;//这里同样获取不到window对象的name属性     

            }

        </script>

        <iframe id = "iframe" src="http://example.com/b.html" onload = "test()"></iframe>
这个时候,document.domain就可以派上用场了:

1、只要设置http://www.example.com/a.html和http://example.com/b.html

这两个页面的document.domain为相同的域名就可以了。

 2、但要注意的是：document.domain的设置是有限制的,

    我们只能把document.domain设置成自身或更高一级的父域,且主域必须相同。
1.在页面 http://www.example.com/a.html 中设置document.domain:

        <iframe id = "iframe" src="http://example.com/b.html" onload = "test()"></iframe>

        <script type="text/javascript">     

            document.domain = 'example.com';//设置成主域     

            function test(){

                //contentWindow可取得子窗口的window对象

                alert(document.getElementById('￼iframe').contentWindow);

            }

        </script>
2.在页面 http://example.com/b.html 中也设置document.domain:

        <script type="text/javascript">

            //在iframe载入这个页面也设置document.domain,使之与主页面的document.domain相同

            document.domain = 'example.com';

        </script>

**修改document.domain的方法只适用于不同子域的框架间的交互**
3、JSONP：JSON Padding，原理是：浏览器不限制通过script标签引入其它网站的脚本，所以可以通过JS向页面上动态添加一个script标签并且指定其 src 为一个特殊的url，对方的服务器针对这个url的请求，会进行特殊处理。

这种方案可以跨域任意域名，但是必是对方有意这样设计才能使用。如果对方不支持将JSON数据padding到函数名后面的()中，则JSONP无法使用。

在jQuery中 $.getJSON() 这个方法支持 JSONP !!!

在url后面加 callback=? 即可，jQuery会自动生成函数名并将调用转交给getJSON中的回调函数。

$.ajax()方法也支持JSONP，设置type:’GET’， dataType:’jsonp’即可

Angular中的$http服务也提供了jsonp()方法支持JSONP

4、将要请求的URL发送给自己的服务端，让服务端发起请求（服务端没有跨域限制），服务端请求成功后，将数据再回传给浏览中的JS----服务端代理请求。

这种方式只要自己的服务端支持一下就可以了，是比较常用的方案，没有任何限制，而且这种方安还可以实现其它方案无法实现的功能：

通过服务端抓取别人的网页，将网页上的数据提取出来，变成JSON返回

在Node.js中，使用cheerio模块可以像使用jquery一样从HTML字符串中筛选并提取想要的数据。

5、使用任何可以利用的浏览器端中间机制实现跨域交换数据

如：window.name在代码中使用name变量时实际上使用的是window对象的name属性，但是name属性是window对象的内部属性。它只接受字符串值，如果给它赋其它值，将会直接被转换成字符串！！！！尤其是赋一个对象给name变量的时候，会导致数据丢失！！！(对象toString()后是[object Object])。但是name有一特别性质可以被用来做跨域数据交换name值不会随全局作用域被销毁，不管窗口跳转到哪个页面，不管窗口打开了多少个页面，name的值都是通用的。其它的，诸如 location.hash 也可以用来做跨域数据交换（主要是iframe）

使用HTML5的window.postMessage方法跨域：

window.postMessage(message,targetOrigin) 方法是html5新引进的特性；可以使用它来向其它的window对象发送消息,无论这个window对象是属于同源或不同源,目前IE8+、FireFox、Chrome、Opera等浏览器都已经支持window.postMessage方法。

24.null和undefined的区别？

null是一个表示"无"的对象，转为数值时为0；null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象

undefined是一个表示"无"的原始值，转为数值时为NaN；

undefined表示 “缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：

变量被声明了，但没有赋值时，就等于 undefined
调用函数时，应该提供的参数没有提供，该参数等于 undefined
对象没有赋值的属性，该属性的值为 undefined
函数没有返回值时，默认返回 undefined
null表示“没有对象”，即该处不应该有值。典型用法是：

作为函数的参数，表示该函数的参数不是对象

作为对象原型链的终点
25.ES6有什么新特性？

ECMA于2015年6月发布的JS标准（也被称作ECMA2015，该版本于2016年6月小幅修订）、目前在Node.js和桌面浏览器上已经完成了支持（主流的现代浏览器都支持），移动端的支持较弱（支持约50%的特性，Android由于碎片化严重，老机型支持更差），目前获得最广泛支持的是ES5.1。ES7预计在2017年发布。

ES6为JS带来了大量的新特性，是JS语言升级最大的一个版本：

支持let块级变量和const常量 2. 支持变量解构赋值
扩展了JS的核心对象
增强了语言反射能力（通过代码获取代码自身信息的能力，如一个类包含哪些方法）
增加了Promise 6. 支持Class定义类 extends 继承类
支持Module模块化 8. 支持迭代接口和生成器等
由于ES6现在还没有被所有浏览器支持，如果想在项目中使用ES6，而且还想保证浏览器兼容性，就需要使用转换工具将ES6转码成ES5。常用的转换工具有：

Traceur：由谷歌提供，可以在网页上就地转换，也可以在线转换、还可以使用Node.js命令行本地转换；

Babel：支持ES6语法转换，如果要支持新增加的API，则还需要使用babel-core。Babel目前由Facebook支持（因为Facebook的React给JS扩展了一套新的组件语法jsx，而这个语法需要babel来转换成普通js）。Babel推荐使用webpack之类打包工具进行转换，Babel也提供了babel-standalone支持浏览器转换，但不应在商业正式环境中使用。

上述两个工具的使用可参考: http://es6.ruanyifeng.com/#docs/intro

模块化

JS的作用域隔离机制较弱，因此使用不当时会产生命名冲突的问题，尤其是在单页应用日益复杂、使用的第三方框架越来越多的情况下更容易产生冲突问题。而且JS本身没有直接提供使用代码加载其它脚本文件的机制。因此产生了JS模块化概念。

JS模块化通常要解决2个问题：提供定义JS模块的办法 和 提供按需加载模块及其依赖模块的办法

常用的JS模块化方案有以下几种：

1、Node.js中的模块化方案（通常称为CommonJS规范，最简单易用，通过约定取消了配置）

2、浏览器中使用中RequireJs（称为AMD规范）和SeaJs（称为CMD规范），这两个都需要配置

3、ES6中的模块化方案（无需配置）

目前在浏览器端使用最广泛的是RequrieJs（jQuery、Underscore、Backbone、Angular、ionic等流行的库和框架都支持），RequireJs通过AMD规范描述了定义和使用模块的方法，本身支持JS文件的按需加载，另外RequireJs还有很多官方和第三方插件可以实现各种文件（如HTML、CSS、其它文本文件等）的动态加载。

另外还需要注意的是Webpack打包工具支持混合使用Nodejs中的require()导及ES6中的import … from …，还支持直接从npm模块包中导入js，因此使用Webpack + npm也越来越流行，尤其是在React阵营中几乎成为主流。

组件化技术

自从HTML产生之后，就以其简单易出成果而被广泛应用，HTML的功能也越来越强大，标签数量也越来越多，到H5标签已经超过100个。但是希望自定义HTML标签的人并不会因为HTML标签越来越多而止步，他们的期望更高，那就是可以自由地增加HTML标签。于是产生了各种支持自定义标签的技术，都可以称之为Web组件化技术，常见的有：

现代浏览器支持的直接自定义新标签的技术（可以理解为是XML），在HTML代码中直接写新标签，默认是inline的，通过CSS可以给予更多的控制。老浏览器不支持。

通过Angular的指令或组件自定义标签。成熟，功能强大，商业应用广泛。ionic中就通过Angular定义了大量的UI控件。

通过Vue.js的组件定义标签。Vue.js中可以定义componet（组件），然后在模版中可以像标签一样使用（Vue.js见下文第三方库及框架列表）。

通过React组件定义标签。这种其实算不上自定义标签，因为它不是HTML，而是JS（所谓的标签其实是jsx组件，编译后变成了js，与HTML关系不大）。

Web Components技术，由W3C提出的技术，有望成为未来的标准。允许直接从DOM的HTMLElement类继承出新标签。这种技术是多种Web新技术的综合，包含自定义标签类、template模板、shadow封装、import导入等，目前还处于试验阶段，除了谷歌外大多数公司都还没有提供支持，离商业应用还很远。

异步编程Promise/Deferred、多线程WebWorker
长期以来JS都是以单线程的模式运行的，而JS又通常应用在操作用户界面和网络请求这些任务上。操作用户界面时不能进行耗时较长的操作否则会导致界面卡死，而网络请求和动画等就是耗时较长的操作。所以在JS中经常要进行异步编程。而最基本的异步编程方法是事件和回调函数。但无论是事件还是回调函数在遇到稍微复杂一点的场景时都会变得难以使用。如时机问题、等待问题等。这时就产生了Promise的概念。

Promise可以保证无论什么时候添加回调函数，都能使回调函数得到恰当的调用；还能保证异步任务的状态不会被篡改。JS中的Promise有多种实现方案，它们的API各有不同，但核心概念都是相似的（jQuery3.x的Deferred已经向ES6靠拢）。

ES6支持Promise、提供了resolve、reject、then、catch、race、all等最基本的API。

jQuery则通过Deferred额外提供了进度通知及在外部改变状态的API，支持resolve、reject、then、done、fail、always、progress、notify、state等，还有通过$.when()支持类似all的功能，支持通过promise()转换成Promise对象（不是ES6中的Promise，而是表示一种不可从外部更改状态的Deferred）

Angular则支持$q，它即兼有ES6中Promise和jQuery Defferred的特点。

使用Promise可以将异步任务本身与后续业务完全分离，因此可以简化异步编程。通过 .then() 的链式调用还可以减少回调函数嵌套的层级，使代码更加易于阅读和易于理解。

JS在H5时增加了多线程API，即WebWorker。WebWorker是一个真正的分线程，与其它系统线程一样。但与其它编程技术中的多线程不同，它是通过消息机制与主线程交互的。因此可以理解为是放入沙盒中的线程。因为没有开放其它API，避免了产生线程死锁的可能，但功能上要弱一些。

27.怎样将两个对象混合在一起？$.extend() 、Object.assign()

28.怎么在网页上实现兼容性较好的音视频播放器，并且还能优先使用H5技术？<soruce/>

29.在手机页面上一打开页面就自动播放音频有什么问题？

部分手机浏览器没法自动播放，添加autoplay="autoplay"属性

添加、移除、移动、复制、创建和查找节点的方法?
1）创建新节点：createElement()、createTextNode()

2）添加、移除、替换、插入：appendChild()、removeChild()、replaceChild()、insertBefore()

3）查找：getElementsByTagName()、getElementsByName()、getElementById()

jQuery部分

01.jQuery支持哪些动画效果？

隐藏/显示 淡入淡出 滑动 还可以自定义动画

fadeIn/fadeOut/fadeToggle(渐入渐出)，hide/show/toggle(隐藏出现)

SlideUp/SlideDown/SlideToggle(上下滑动)，animate()(自定义)

02.点击显示和隐藏怎么实现？

$("#hide").click(function(){$("p").hide();}) $("#show").click(function(){$("p").show();});

03.动画执行完毕之后需要执行一段代码该怎么做？

jQ中自定义动画的时候 $(selector).animate({},1000,easing,function(){ 动画完成后执行的代码})

04.jQuery Deferred都有哪些常用的方法？分别是什么作用？

.Deferred() 生成一个deferred对象。

deferred.done() 指定操作成功时的回调函数

deferred.fail() 指定操作失败时的回调函数

deferred.promise() 没有参数时，返回一个新的deferred对象，该对象的运行状态无法被改变；接受参数时，作用为在参数对象上部署deferred接口。

deferred.resolve() 手动改变deferred对象的运行状态为"已完成"，从而立即触发done()方法。deferred.reject() 这个方法与deferred.resolve()正好相反，调.0用后将deferred对象的运行状态变为"已失败"，从而立即触发fail()方法。

deferred.then()有时为了省事，可以把done()和fail()合在一起写，这就是then()方法。

deferred.always()这个方法也是用来指定回调函数的，它的作用是，不管调用的是deferred.resolve()还是deferred.reject()，最后总是执行。

jQuery开发团队就设计了deferred对象。简单说，deferred对象就是jQuery的回调函数解决方案。在英语中，deffer的意思是"延迟"，所以deferred对象的含义就是"延迟"到未来某个点再执行, 它解决了如何处理耗时操作的问题，对那些操作提供了更好的控制，以及统一的编程接口。

05.对Deferred的then进行链式调用时有什么要求，有什么作用？

Deferred.then()相当于Deferred.done()、Deferred.fail()、Deferred.progress()的合体，可以同时注册3个状态下的回调函数。

06.Deferred的then链式调用和非链式调用有什么区别？

前一个要向后一个传递deffered对象。

then()返回的是一个新deffered对象then注册的回调函数的返回值将作为这个新deffered的参数,then()的作用也是指定回调函数，它可以接受三个参数，也就是三个回调函数。第一个参数是resolve时调用的回调函数，第二个参数是reject时调用的回调函数，第三个参数是progress()方法调用的回调函数。

07.jQuery3.0有什么新变化？

（1）、移除旧的IE工作区:早于IE9版本的相关技术与工作区都被移除了

（2）、简化了 show/hide之前的 show/hide 是大兼容，比如 show， 无论元素的 display是写在style，stylesheet里都能显示出来。3.0 则不同了，写在 stylesheet 里的 display:none 调用 show 后仍然隐藏。 3.0 建议采用class方式去显示隐藏，或者完全采用 hide先隐藏（不使用css代码），再调用 show 也可以。

（3）、data 方法兼容 data-name-11：$('#txt').data() 3.0 版本 输出 {"name-11": aa}， 之前版本输出 {}

（4）、jQuery 3.0运行在Strict Mode下

（5）、引进for...of循环

（6）、动画方面采用新的API

（7）、对包含特殊含义的字符串提供转义的新方法：jQuery.escapeSelector()提供了对在CSS中存在特殊含义的字符串或字符进行转义的方法：比如：页面中某个ID为 “abc.def” 的元素由于选择器将其解析为 ID为“abc”且包含一个名为“def”的类的对象， 而无法被$( "#abc.def" )选定。但是它可以由 $( "#" + $.escapeSelector( "abc.def" ) )来进行选定。

（8）、 类操作方法支持SVG：jQuery 3现在还无法完整的支持SVG，但是对于 操作CSS类名称 的jQuery方法，如 .addClass() 和 .hasClass() 现在可以将SVG文档作为目标。

（9）、延迟对象现在与JS Promises兼容

08.jQuery怎样添加和移除事件监听函数？通过on添加 通过off移除

09.JQuery中如果某事件只需处理一次怎样添加监听函数？one()该方法绑定的事件触发一次后自动删除.

10.如果希望事件监听对以后添加到页面上的新标签也有效，应该怎么做？使用事件委托. on 是事件委托

11.文件框中输入的内容变化时立即获得事件通知应该监听什么事件？

onchange事件是文本框内容改变并失去焦点的时候才触发；比较完美的解决办法：oninput和onproper

oninput 是 HTML5 的标准事件，对于检测 textarea, input:text, input:password 和 input:search 这几个元素通过用户界面发生的内容变化非常有用，在内容修改后立即被触发，不像 onchange 事件需要失去焦点才触发；

oninput 事件在 IE9 以下版本不支持，需要使用 IE 特有的 onpropertychange 事件替代；

12.表单中进行什么样的操作会导致表单提交？如果希望阻止表单提交怎么办？

在form标签中添加Action(提交的地址)和method(post)，且有一个submit按钮（<input type=’submit’>）就可以进行数据的提交，每一个input标签都需要有一个name属性，才能进行提交。

点击提交按钮时 阻止默认提交event.preventDefault() 阻止默认提交，在form表单监听表单提交事件(onSubmit)

13.jQuery中的proxy方法有什么作用？

jQuery.proxy()函数用于改变函数的上下文。你可以将指定函数传入该函数，该函数将返回一个新的函数，其执行代码不变，但函数内部的上下文(this)已经被更改为指定值。

14.jQuery中执行一个动画后，隔2s后再执行一个动画应该怎么写？

$().animate();//执行一个动画；$().delay(2000).animate()//2s后执行另一个动画

15.jQuery中怎么停止动画？停止后参与动画的标签元素会处于什么状态？

stop() 在当前位置停止动画。 停止：$(this).stop(false,true).animate(); //当前动画直接到达末状态

16.jQuery中能不能改变动画频率？

jQuery.fx.interval 属性用于改变以毫秒计的动画运行速率。可操作该属性来调整动画运行的每秒帧数。

默认值是 13 毫秒。该属性常用于修改动画运行的每秒帧数。

降低这个值能够使动画在更快的浏览器中运行得更流畅，但这么做也行会影响性能。

17.jQuery中能否在color或background-color等颜色值上实施动画？

jQuery的animate函数可以进行与尺寸相关CSS样式动画，但对于如background-color等与颜色相关的CSS样 式渐变的动画没有提供。

18.jQuery插件有2种类型，分别是哪2种？

（1）封装对象方法的插件$(obj).lightbox();（2）封装全局函数的插件$.函数名(参数)

19.你用过哪些jQuery插件？全屏滚动插件 焦点图插件 无缝滚动插件 swipper

20.jQuery中的Callbacks是什么？有什么用？有哪些常用方法？

（1）用来管理一组有相同方法参数的回调函数

（2）主要用来进行函数队列的add、remove、fire、lock等操作

（3）add：向内部添加函数；fire：依次执行队列里的函数；empty：清空函数队列；has：判断函数队列中是否存在某个函数；remove：从内部队列中移除某些函数；disable：禁用回调列表；lock：锁定回调管理

22.使用jQuery在同一个页面发起多个Ajax请求时能否将共同的请求设置一次性设置好？能否用一个函数处理所有请求的失败？

可以 $.ajaxSetup({type:请求方法}) Promise.all().then().catch().finally()

23.JSONP是什么？jQuery是否支持JSONP？怎么支持的？

JSON是一种数据交换格式，而JSONP是一种依靠开发人员的聪明才智创造出的一种非官方跨域数据交互协议。支持 jQuery-JSONP是一个支持 JSONP 调用的 jQuery 插件跨域请求(浏览器通过没有限制跨域的script标签，指定其src属性为特殊的url，对方的服务器针对这个url请求，会进行特殊处理)，$.getJson(),

不仅如此，我们还发现凡是拥有"src"这个属性的标签都拥有跨域的能力，比如<script>、<img>、<iframe>）该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。

25.jQuery Ajax怎么设置请求头？怎么获取响应头？怎么设置请求超时时间？

设置请求消息头：

$.ajax({

type: "GET",

url: "test.php",

success: function(data) {

    console.log(data);

},

beforeSend: function(xhr) {

    xhr.setRequestHeader("User-Agent", "headertest");

}
});

获取响应头： xhr.getResponseHeader()

超时时间：

var ajaxTimeoutTest = $.ajax({

　　url:'', //请求的URL

　　timeout : 1000, //超时时间设置，单位毫秒

　　type : 'get', //请求方式，get或post

　　data :{}, //请求所传参数，json格式

　　dataType:'json',//返回的数据格式

　　success:function(data){ //请求成功的回调函数

　　　　alert("成功");

　　},

设置 complete 回调函数

　　complete:function(XMLHttpRequest,status){ //请求完成后最终执行参数

　　　　if(status=='timeout'){//超时,status还有success,error等值的情况

　　　　　 ajaxTimeoutTest.abort();

　　　　　 alert("超时");

　　　　}

　　}

});

26.jQuery Ajax发起POST请求时，如果数据需要以JSON格式发送到服务端该怎样写？

只需要调用$.ajax()方法，并指明请求的方式、地址、数据类型，以及回调方法等

dataType:’JSON’ JSON.stringify() 或在服务端body-parser使用json方法

27.怎样通过jQuery Ajax请求上传文件？

第一步：引入js文件名称 第二步：编写<input type="file" name="file" id="file"/>点击上传文件。

第三步：编写ajaxFileUpload异步请求，并处理请求结果。

28.怎样实现将图片从文件夹拖拽到页面时将图片显示到页面上？如果拖拽到页面上就直接通过Ajax上传到服务器呢？

（1）为了处理放置文件的操作，需要处理三个事件：ondragenter、ondragover和ondrop。

（2）处理图片用的是 readAsDataURL() 方法，其得到的数据URL是一种用长字符串表示图片的方式。为了在网页中显示图片，可以将 <img> 元素的src属性设置为图片URL，也可也将CSS的 background-image 属性设置为图片URL（本例采用此方式）

（3）这里将显示图片的 background-size 设为100%，为了缩小图片以全部显示。并将 background-repeat 设为 no-repeat，不让图片重复显示

通过jQuery能否向页面导入新的js脚本文件（用哪个方法），如果希望在加载的js脚本执行后运行一段代码该怎么办？
jQuery内置了一个方法可以加载单一的js文件；当加载完成后你可以在回调函数里执行后续操作。最基本的是使用jQuery.getScript（这个加载需要时间，因此需要用一个时间戳字符串跟在需要加载的js地址后面，防止它被缓存，方法为：jQuery.ajaxSetup({ });）

运行一段代码可以使用 .done（function(){}）

例：jQuery.getScript("jquery.cookie.js").done(function() {

jQuery.cookie("cookie_name", "value", { expires: 7 }); });

nodeJs、requireJs 、ArtTemplate、自动化构建工具

RequireJs与jQuery的getScript()方法有什么不同？
jquery.getScript(url,[callback]),url js路径 回调函数

RequireJs加载时不需要url，加载的是模块名,且导入的模块得有输出（返回值exports/return）

RequireJs引入js文件只要配置好路径，就不用在意写js的先后顺序，一起并行加载 提高js加载效率，并且只需要写一个js文件，可以缓存在客服端。

getScript 加入脚本，得有延时函数，在加载有依赖的js文件时会导致加载的先后没法确定，会出现页面不正常，不会建议缓存在客服端，并且加重了客户端对服务器的请求次数。

RequireJs中怎么指定页面的主js脚本文件？
data-main属性，查找其程序的主入口文件(data-main)；例如： <script src="require.js" data-main="main"></script>

data-main属性:规定了程序的主入口文件(默认名为main,可自定义)文件不需要加.js后缀，在requireJS中，默认加载的是js文件

RequireJs中怎么定义模块？怎么指定模块依赖项？
define（）定义一个模块:（define(id, [], function)

para1: 默认的ModuleId是文件名， id是可选值(不写)

para2: []当前JS文件的依赖项，只有一个依赖项，也是个数组

para3: function: 依赖项加载完成之后的回调函数 === 当前JS的主要内容

RequireJs中怎么将数据或功能导出模块？
三种方法 1.直接用return导出

2.加载一个module模块用module.exports导出

3.加载一个require模块在函数中写入var module = require（‘module’）再用module.exports 导出

RequireJs中怎么加载模块，并在模块加载完成后执行代码？
在入口文件对js文件进行配置 在当前的js文件中define的第一个参数为依赖数组将依赖项写入依赖数组中，这样就会在所需的模块加载完成后执行后面函数中的代码，其核心就是要确定依赖关系

RequireJs中如果要加载jQuery应该怎么做？
jQuery特殊引入方式：1、名字命名为jquery.js 并且和入口文件在一个目录下

2、定义模块的方式。 命名为：jquery，依赖项是jquery的路径，返回jQuery对象

define("jquery", ["./js/jquery-2.0.3"], function($) { return jQuery; })

RequireJs中如果要加载jQuery插件应该怎么做？
这需要在入口文件中做配置先在paths中写入要加载的jQuery插件的js文件；如果有依赖jquery的可以在shim中做依赖jQyuery的配置

RequireJs除了能加载js脚本文件外，能否加载其它文件？怎么做？
引入require-css.js文件，在config中进行配置然后再define中用css!css/index !前面为插件的路径后面为文件的路径

ArtTemplate支持if/else吗？除了if/else之外还有什么方法能实现条件判断？支持，三目运算符
ArtTemplate支持循环处理数据（如数组）吗？
支持 使用遍历表达式

{{each listArr as item index}} // listArr是数组；item数组中的每一个元素；index是索引

标签内容

{{/each}}

ArtTemplate支持引用子模板吗？
支持，在想要使用的模板中用include 后面跟模板的路径

{{include "template_name"}} //template_name 引入模板的名字

ArtTemplate支持将模板字符串编译成函数吗？
支持,通过template.compile(source, options)来将返回一个渲染函数。

支持,通过template(id)来将返回一个渲染函数。

Express中怎么从URL的QueryString中获得参数？用req.query
npm是什么？Node模块包管理器; npm是云端包管理器，是用来安装模块，创建模块，发布模块，测试模块
npm init命令的作用是什么？初始化一个nodejs项目，生成一个package.json文件
Node.js中导入模块和导入js文件写法上有什么区别？导入模块是直接写文件的名字，而导入js文件时要写路径
Grunt是什么？有哪些常用的插件？
Grunt 是一个基于Nodejs的自动化任务执行工具。那么什么是任务执行工具呢，其实就是按照之前编定好的规则执行任务的一个工具。grunt-contrib-clean grunt-contrib-uglify grunt-contrib-concat grunt-contrib-copy：复制文件和文件夹。grunt-contrib-cssmin：CSS文件压缩。grunt-contrib-imagemin：图片压缩。grunt-contrib-htmlmin:压缩html

知道Gulp吗？知道，gulp、grunt前端自动化工具 js构建工具

源代码管理工具、插件、工具

01.怎么在页面上绘制曲线图等图表？能否支持双Y轴？Echats 支持

02.手机页面怎么支持手势识别？通过Touch API来支持触控

03.JS支持多线程吗？支持h5之后增加了多线程API，Web Worker

04.JS支持Socket双工双向通信吗？支持 Web Socket

05.JS支持GPS定位吗？支持 getCurrentPosition()

06.JS可以实现摇一摇吗？可以 window.DeviceMotionEvent

07.微信可以实现语音识别吗？可以

08.什么时候使用git分支？怎么创建分支？怎么合并分支？

主分支一般为成熟内容，分支内容可以是一些测试性质或研发新特性等

git branch <分支名> git merge <要被合并到当前枝节的分支>

09.Git 合并冲突了怎么办？手动解决

10.Git第一次从远程库获取代码用什么命令？git clone [romote-name]

11.Git从远程库获取更新用什么命令？git pull

12.Git将已提交的代码发送到远程库用什么命令？git push

13.Git查看提交历史记录用什么命令？

git log #显示提交日志

git log --oneline #一行显示提交日志

git log -1 #显示一条日志

git log -n #-n 显示 n条日志

git log --graph 以图片化方式显示提交记录

14.说说你对React的了解

React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套。做出来以后，发现这套东西很好用，就在2013年5月开源了；

React 是 Facebook 为了开发复杂和高性能Web页面而发布的开源项目，它为View层的组件化开发提供了一个全新的解决方案，支持虚拟DOM和JSX是它的最大特点；

React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。但React 本身还在不断变动，API 一直在调整，至今没发布1.0版。参考：http://www.ruanyifeng.com/blog/2015/03/react.html

JSX：HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法

组件：React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件

虚拟DOM：组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。

只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。

15.Babel你用过吗，怎么使用的？

Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。这意味着，你可以用ES6的方式编写程序，又不用担心现有环境是否支持。

使用Webpack有什么优势？
支持commonJS和AMD模块，可以使模块加载器灵活定制。

使用babel-loader加载器，该加载器能使我们使用ES6的语法来编写代码。

可以通过配置打包成多个文件，有效的利用浏览器的缓存功能提升性能

使用模块加载器，可以支持sass，less等处理器进行打包且支持静态资源样式及图片进行打包

Vue

一、vue介绍

渐进式JavaScript框架

Vue是是一款MVVM模式的前端js框架，其最大的特点是基于.vue单文件的组件化开发，使一个复杂的页面可以拆分为多个独立的，可复用的组件。另外还拥有双向数据绑定，事件系统，计算属性(computed)，状态过度，自定义指令，过滤器等功能。

组件：组件（Component）是 Vue.js 最强大的功能。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。组件中几个重要的属性：

data:组件自身的数据，除根组件之外，必须是一个函数。

template:组件模板，可以是字符串，也可以是模板所在标签的#id，如果使用.vue文件设计组件则可以没有temlpate属性；

props:从父组件传值接受的数据，只能读取，不应修改。

computed:使用data或props计算出来的属性，其计算的结果会被缓存，只有函数中使用的变量变化时才会再调用。

methods:组件的方法(函数)

mounted:组件被渲染之后的钩子函数（被添加到俯视图上时）。

created:被创建时的钩子函数。

activated:组件变为活跃状态时的钩子函数。

mixin:混入选项。

条件渲染：v-if ，v-show，可以实现切换某个组件或元素的显示与隐藏。v-for，用于渲染一个列表，常用于数组的渲染。

单向数据流：vue中数据的传递只能是自上而下的，父组件传递给子组件，子组件通过事件发射$emit来实现与父组件的通信，非父子组件之间的消息传递可以通过空Vue对象作为事件bus总线，更为复杂的情况可以通过vuex。

Slot插槽：父组件给子组件传值还可以通过标签内容传递，而slot插槽则是标记html内容分别应该放在子组件模板中的什么位置。

Vue双向数据绑定原理：vue对象在实例化时，会将data对象中的所有属性都通过Object.defineProperty方法以set，get方法的形式添加给vue实例，然后在属性的set方法中添加了监视函数，每当修改data属性时，set方法就会调用，从而调用监视函数，监视函数会修改页面中绑定这个数据的部分。

单文件组件：使用vue-cli创建项目时，可以使用.vue文件创建单文件组件，可以将一个组件写在一个vue文件中，然后在其他文件中导入就可以使用。这样大大提高的代码的结构性。

Webpack：一个功能强大的打包工具，vue使用webpack进行打包，通过vue-loader将vue文件打包成浏览器可以识别的js文件。

Vux：一个功能齐全的vue组件库，其中实现了轮播图，列表，选项卡，tabBar等移动页面常用的功能。类似的组件库还有很多，例如mintUI，vonic等。

Vue开发经验

用vue进行项目编写开发我们要注意以下事项

1.要考虑页面上哪些部分可以封装成公共组件

2.数据层次是怎样进行划分的（因为vue是数据驱动视图的，所以组件划分也是要依据数据进行划分），最好先做好数据设计，再进行组件和页面的开发

3.是否需要使用UI框架？现阶段的vue的UI框架说白了都是一些组件库（达不到框架统摄整个应用的级别）

4.多使用es6的写法，尤其是import导入和export导出功能，那样的写法很轻松(推荐阅读阮一峰的ECMAScript6入门)

5.要注意项目的文件组织，组件可放置在components文件夹下，页面可放置在pages文件夹下，路由配置可放置在router文件夹下，vuex配置可放置在vuex文件夹下，全局过滤器可放置在新建的filters文件夹下，整体项目会一目了然

对vue的看法

现在前端的发展趋势，新型的三大框架(React，Vue，Angular2)都是使用的组件化构建思想，对于三者来讲，vue偏轻量，更灵活一点。学习难度也比其他两个低，不像React和Angular2那么激进，vue社区最近也很活跃。

Vuex状态管理

Vuex 是一个专为 Vue.js 应用程序开发的状态管理库。它采用集中式存储管理应用的所有组件的状态（也就是整个应用的数据被Vuex统一集中管理，而不在分散到组件当中），并以相应的规则保证状态以一种可预测的方式发生变化（只能通过Vuex指定的方式<store.commit(‘mutation’)>更新数据）。说白了在应用中承担着数据处理中心的职责。

推荐组件间通信比较复杂的时候使用Vuex。使用状态管理设计应用的模式常被成为状态管理模式。在React开发中也比较常见。 每个vuex应用都包含一个唯一的store实例，包含以下几部分

1.state 组件的状态(数据)，是store的核心部分

2.mutation 提交mutation是更改store中的state的唯一方式，只能是同步的

3.getter 获取state状态数据，可以对数据进行加工

4.action 用于封装业务逻辑，尤其是ajax等异步操作，在action中通过提交mutation来更改state。action与mutation的区别是:action主要是实现业务逻辑 mutation主要是用来更改state

5.module 可以将store分割为更小的块，每个块拥有自己的state、mutation、action、getter。当state较大时适合使用module进行拆分
组件(页面)中的数据来自于state，页面上的操作最终导致action被派发(dispatch)，action内部实现了业务逻辑(尤其是ajax等异步操作)，并且提交了mutation，导致状态(state)被更改，state的更改会通知vue重新渲染页面

Vue知识

Vue了解

渐进式JavaScript 框架

三、Vue 模板与对象绑定

模板

<div id="app">

<span>{{message}}</span>

</div>

var app = new Vue({ // 创建一个vue实例

el: "#app", // 通过el绑定模板

data:{ // data写数据

message:"Hello Vue!"
}

});

四、模板语法(大部分是指令)

{{}} 插入值
v-bind 指令 绑定值
v-on 指令 绑定事件
v-if 判断条件
v-for 循环
v-once 只绑定一次
v-html 插入html
v-model 双项数据绑定
五、vue实例的 选项

data:{ //保存数据的对象
message:"Hello Vue!"

}

methods{ //保存方法的对象
change: function() {

this.seen = !this.seen;

}

}

filters:{ //保存过滤器的对象
capitalize: function(text) {}

}

conputed:{ //计算属性对象 这个值都是get回来，计算属性会缓存内容 ，相同的值只计算一次
birthYear: function() {

var year = new Date().getFullYear();

return year - this.age;

}

}

六、指令

指令（Directives）是带有 v- 前缀的特殊属性。
(1). if指令

<div v-if="seen">能不能看到我？</div>

(2). 带参数：一些指令能接受一个“参数”，在指令后以冒号指明。

<a v-bind:href="url">百度</a>

(3). 带有修饰符：修饰符（Modifiers）是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定

<a href="https://www.google.com"; v-on:click.prevent="go">google</a>

七、过虑器 Filters

定义过虑器
filters: { // 过虑器对象 里面可以放很多的过虑器

capitalize: function(text) {

if (! text) {

return "";
}

text = text.toString();

var result = text.charAt(0).toUpperCase() + text.slice(1);

return result

}

}

使用过虑器
{{ value | capitalize}}

八、缩写

v-bind 缩写成 :
v-on 缩写成 @
八、计算属性

computed:{

  birthYear: function() {  // 只有get没有set

  var year = new Date().getFullYear();

  return year - this.age;

},

time: {

  cache: false,

  get: function() {

    return new Date();

  }

},

birthY: {

  get: function() {

    var year = new Date().getFullYear();

    return year - this.age;

  },

  set: function(newValue) {

    var year = new Date().getFullYear();

    this.age = year - newValue;

  }

}
}

九、Class 与 Style 绑定

class 样式类
(1). 对象写法

<div class="one" :class="classObject">对象方法绑定 class</div>

<div class="one" :class="{green:bTrue,red:bFalse}">对象方法绑定 class</div>

// 在data里面

classObject: {

// 键名是class值，键值 真显示class 假不显示

"green": true,

"red": false

},

bTrue:false,

bFalse:true,

(2). 数组写法

<div class="one" :class="classArr">数组方法绑定 class</div>

//在data里面

classArr:["red","green"],

style 内联样式
(1). 对象写法

<div :style="styleObject">对象方法绑定 内联样式</div>

styleObject:{

color:"red",

fontSize:"30px"

}

(2). 数组写法

<div :style="[styleObject,styleObject2]">对象方法绑定 内联样式</div>

styleObject:{

color:"red",

fontSize:"30px"

}

styleObject2:{

lineHeight:"60px",

fontWeight:"800"

}

一、什么是组件

组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。

目的：组件可以扩展 HTML 元素，封装可重用的代码

二、使用组件

注册全局组件
注册局部
dom模板解析说明
data必须是函数
5.构成组件

组件意味着协同工作，通常父子组件会是这样的关系：组件 A 在它的模版中使用了组件 B 。它们之间必然需要相互通信：父组件要给子组件传递数据，子组件需要将它内部发生的事情告知给父组件。然而，在一个良好定义的接口中尽可能将父子组件解耦是很重要的。这保证了每个组件可以在相对隔离的环境中书写和理解，也大幅提高了组件的可维护性和可重用性。

在 Vue.js 中，父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。看看它们是怎么工作的。

三、Prop

使用 Prop 传递数据
camelCase vs. kebab-case
动态 Prop
字面量语法 vs 动态语法
单向数据流
Prop 验证
四、自定义事件

1、子组件向父组件传递数据的方式 --- 自定义事件；子组件触发事件，父组件监听事件

<my-div @myclick="say"></my-div> //监听自定义事件

this.$emit('myclick','hello vue!') // $emit：触发一个事件

2、非父子组建之间的传值：借助一个空的Vue实例作为中央事件总线

bus.$on('change',function(value){ // $on() 监听事件

console.log(value)
}.bind(this));//这里的this指向bus,要改变this的指向

bus.$emit('change','hello vue!'); // 触发事件

五、使用 Slot 分发内容

编译作用域
单个 Slot
具名 Slot
作用域插槽
六、动态组件

多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用保留的 <component> 元素，动态地绑定到它的 is

keep-alive

如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数：

七、杂项

编写可复用组件 props, events 和 slots
组件索引
尽管有 props 和 events ，但是有时仍然需要在 JavaScript 中直接访问子组件。为此可以使用 ref 为子组件指定一个索引 ID

<div id="parent"> <user-profile ref="profile"></user-profile> </div>

var parent = new Vue({ el: '#app'})；

var child = parent.$refs.profile // 访问子组件

组件命名约定
当注册组件（或者 props）时，可以使用 kebab-case ，camelCase ，或 TitleCase 。Vue 不关心这个。在 HTML 模版中，请使用 kebab-case 形式：

进阶

一、 过度效果 （基础）

transition 过度动画

animation 关键帧动画

transform 变幻

translate() 平移

scale() 缩放

rotate() 旋转

skew() 斜切

matrix(a,b,c,d,e,f) 矩阵

二、 一般产生过渡效果的几种情况

v-if

v-show

初始化渲染页面

动态组件（组件之间的切换）

三、css过渡

会有 4 个(CSS)类名在 enter/leave 的过渡中切换

v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。

v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。

注意：v-enter-active 要写在前面

四、css动画

v-enter-active:

v-leave-active:

五、自定义过渡类名

使用外部动画库

六、javascript钩子 和动画

动画相关事件函数

七、初始渲染动画

注意：初始渲染动画 最好不要和css过渡动画一块，会产生冲突

八、过渡模式

一个动画结束，别一个动画才开始

in-out: 新元素先进行过渡，完成之后当前元素过渡离开。

out-in: 当前元素先进行过渡，完成之后新元素过渡进入。

TypeScript

TypeScript是什么
TypeScript:是JavaScript的超集，需要编译成js使用，它让JavaScript支持强类型

在强类型的编程语言中，变量的类型从声明时就确定了，并且不能再发生变化，如果赋值为其它非兼容类型则直接导致编译出错（例如age变量类型声明为Number则赋值为String时就会报错，而这种情况在js中是不会报错的）。强类型可以使开发工具（IDE）更容易通过代码提供的类型信息发现代码中的错误，也能在编程时给程序员更好代码提示，还有利使用工具对代码进行准确地重构。强类型语言的开发工具通常都做得特别好，智能化程度较高，大型项目的开发效率也更高。TypeScript包含了ES6和ES7的语法，它是JavaScript“未来版”。它不能直接运行，需要先编译成普通JavaScript才能在浏览器中运行。它是开源的。它来自于微软。

使用TypeScript的好处?
1、强类型，有更高的可预测性，更易纠错（即开发工具更加智能）。

2、编译为JavaScript的过程中，可以检查出很多普通JS难以发现的错误。

3、增加了模块，命名空间和强大的面向对象编程支持，构建大型复杂应用程序更加容易。

4、Angular 2 框架就是用 TypeScript 编写的，并且官方推荐开发人员也使用它。

5、React中也可以使用TypeScript编写代码

TypeScript的基本数据类型
number（数值类型）：所有数字都是数值类型的，无论是整数、浮点型

string（字符串类型）：可以使用单引号或双引号

boolean（布尔类型）：true 或者 false，用 0 和 1 会造成编译错误。

any（任意类型）：该类型的变量可以设定为任何类型，但应尽可能少地使用它，优先考虑使用范型。

array（数组类型）：有两种语法：my_arr: number[];或者my_arr: Array

void （空类型）：用在不返回任何值的函数中。

所有变量类型列表请参考http://www.typescriptlang.org/docs/handbook/basic-types.html

4、 Interfaces 接口

注意此接口是编程语言级的，不是开发应用时常说调用服务端接口的那个接口。

编程语言级的接口通常是一种面向对象程序设计上的考虑，为的是强制某些类实现一组方法或属性等成员。TypeScript不支持多重继承，但一个类可以实现多个接口。

接口中声明的方法属性等对象必须实现，方法和属性顺序并不重要，方法或属性的个数不够，类型不一致，名称拼写错误等情况发生时编译器都会报警告信息。

5、类

TypeScript 给前端开发者提供了一个强类型的编程语言，终于可以像Java、C#一样利用更强大的IDE来构建大型前端应用程序了。TypeScript 创建类时使用class关键字

6、泛型

在强类型的编程语言中因为强类型的限制也存在一种尴尬：就是同一份代码（算法）即使有通用性也会因为参数类型限制而不能被其它类型重用。如compare(a:number， b:number):bool这个函数只能传数字类型，而不能传字符串等其它类型。如果使用any类型则强类型的优势又不复存在！

为了解决这个问题，比较先进的强类型编程语言都支持泛型这一功能（如Java、.NET等）。

泛型（Generics）是在代码中添加类型符号，编译代码时会根据当时需要的类型编译出一份针对这种类型的代码，而遇到另一种类型时再编译出另一份代码。因此泛型可以理解为代码的模版。泛型的代码实际上会编译成多份代码（Java、.NET）。但因为TypeScript编译出的是JS，而JS是弱类型的，因此TypeScript的泛型并不会生成多份代码，而只会生成一份弱类型的JS代码，泛型起到的是类型检查和强制的作用。

function identity<T>(arg: T): T {

return arg;
}

var output = identity<string>('myString');

var output2 = identity<number>(100);

7、模块

模块在其自身的作用域里执行，而不是在全局作用域里。这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。 相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们。

两个模块之间的关系是通过在文件级别上使用imports和exports建立的。

模块使用模块加载器去导入其它的模块。在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。

可以通过import 和 require 关键字在另一个模块中导入其他模块。

8、装饰器

装饰器（Decorators）可以让我们给类、方法等增加一些额外的信息。这些信息在Java、.NET中通常被称为元数据。装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用。

@sealed

class Greeter {}

Angular2中大量使用了装饰器。

Angular2

Angular2是对Angular1一次颠覆，可以开发跨平台的渐近式Web应用，引入H5的新特性Web Worker和服务端渲染来改善了性能，它配合TypeScript语法来编写严格的代码，号称一套框架多种平台，同时适用手机与桌面，正在飞速发展中， Angular4也已经正式发布，它和Angular2保持了较好的兼容性。

Angular2 应用是由组件组成的。 组件由 HTML 模板和组件类组成，组件类控制视图。组件负责控制屏幕上的一小块区域，我们称之为视图。

Angular2还可以与Ionic2一起配合使用。

Angular2主要有8块内容:

1,模块(module)：Angular遵循模块化开发，一个Angular应用至少有一个模块（根模块），根模块在一些小型应用中可能是唯一的模块，大多数应用会有很多特性模块，每个模块都是一个内聚的代码块专注于某个应用领域、工作流或紧密相关的功能。模块中通过declarations声明模块中包含的组件、指令、冠道，通过import导入其所依赖的其他模块，通过providers注入其所依赖的服务。

2,组件(component)：组件负责控制屏幕上的一小块区域，对于复杂庞大的页面，可以通过组件将其拆分为多个组件，从而开发时可以专注于某个组件，最后将多个组件合成一个页面，在类中定义组件的应用逻辑，为视图提供支持。 组件通过一些由属性和方法组成的 API 与视图交互。

3，模板(template)：模板是组件的视图部分。我们通过组件的自带的模板来定义组件视图。模板以 HTML 形式存在，告诉 Angular 如何渲染组件。模板中可以使用指令、组件、管道。

4，元数据(metadata)：在angular2中，模块、组件、管道、指令都是一个类，而对于这个类的属性（例如组件的selector,templateUrl）则通过@Component装饰器添加到类中，这些元数据可以理解为类的静态属性，装饰器只是添加这些静态属性的语法糖。

5，数据绑定(databind)，和其他前端框架一样，数据绑定（双向绑定）是整个框架中最为实用的功能，在双向绑定中，数据属性值通过属性绑定从组件流到输入框。用户的修改通过事件绑定流回组件，把属性值设置为最新的值。和angular1不同，ng2不再实用$digist驱动脏检查，提高了数据绑定效率。

6，指令(directive)：指令作为属性或class或自定义标签添加在元素上，当 Angular 渲染它们时，它会根据指令提供的操作对 DOM 进行各种操作。组件实质上就是带模板的指令。Angular2中也提倡组件化开发，而指令是组件工作的核心。

7，服务(service)：对于业务逻辑代码，或者常量，angular提倡单独存放（不像vue一样写在组件中），这样可以提高代码重用性，在需要使用这些服务的组件中导入这些服务。

8，依赖注入(dependency injection)：依赖注入和服务共同解决了angular中代码依赖问题。Angular将应用中所有的服务集中在注入器中，为组件、过滤器等自动注入所依赖的服务，它降低了业务逻辑代码和UI代码之间的耦合度，提高了代码的重用性，

AngularJs1.x与Angular2的主要区别

对比项

AngularJs 1.x

Angular 2/4

名字

AngularJs

Angular，去掉了JS

编程语言

JavaScript，可以直接在浏览器中运行代码

TypeScript，不能直接在浏览器中运行代码，必须经过编译，所以必须使用构建工具

平台

只针对Web平台，能非常好地支持桌面Web和手机Web。

除了支持Web平台，还能支持桌面和手机的原生平台。Angular2/4的宣传口号是“一个框架，多个平台”。例如Angular是应用框架，而React专注于视图层，于是Angular+ReactNative就使得Angular能够以原生界面的方式运行于手机上，而且官方对于这一构想也提供了一个开源的实现（在Github上）。值得注意的是Angular说的是一个框架多个平台，而不是一套代码、多个平台。在针对不同平台进行开发时，UI层的代码是不同的，最多只能共用业务层和底层代码。也正是因为Angular的这种跨平台的目标决定了在Angular高级开发中（比如写自定义指令甚至构建UI框架时）直接进行DOM修改是比较困难的，因为官方也不建议这么做。

作用域Scope

作用域链（相当于视图模型）

无

脏值检查

$digest机制，多次检查整个作用域链

采用与VueJs类似的机制，取消主动脏值检查

控制器Controller

非常重要，用于封装视图控制逻辑甚至业务逻辑

无，组件化开发

指令

指令数量较多；指令与组件区别较少

指令数量较少，但指令更强大了；指令与组件区别明显，指令使用符号，如ngFor、*ngIf

组件

通过组件定义对象CDO进行组件定义；组件比较鸡肋，大多数情况下都在使用指令

通过装饰器元数据和组件类进行定义，组件呈现和控制页面上的一块区域；大量、直接使用组件构建应用页面

模板

HTML然后编译成DOM

可以支持多种视图Render，如与Vue或React结合都是可以的。即使HTML也不是直接编译成DOM的，而是虚拟DOM的方式。

过滤器

Filter

名字改为Pipe，增加asyc、slice、percent去掉filter、limit、orderby，Angular2认为筛选/分页/排序属于视图控制逻辑/业务逻辑

绑定

通过大量指令和模板插值实现，单向绑定双向绑定区别不明显

大量使用括号，

() 从视图到数据方向，指事件

[] 从数据到视图方向

[()] 双向绑定

{{}}，模板插值

严格区分2种单向绑定，区分单向绑定和双向绑定

父子组件/指令传值

作用域链继承

广播/发射事件

属性传值

服务共享

订阅事件

属性传值

服务共享

服务

按照Angular规定好的方式定义服务，服务属于模块级，定义时自动注册到模块中

普通类，需要在模块或组件级别的providers元数据中声明

模块

在应用层面明确地区分为根模块和特性模块（可以理解为普通模块），模块内部包括组件、指令、服务（包括服务类、值、函数）

一般这样区分：官方模块、第三方模块、自定义模块。模块包含的东西比较多，比较容易混淆

路由

内置的路由机制不支持嵌套，通常复杂点的页面就要使用第三方路由ui-router

支持平级多路由，支持基于组件的多级嵌套路由，支持路由守卫

元数据

受限于JavaScript语言而无明显的元数据概念

有明确的基于装饰器的元数据概念

组件生命周期

没有明确的生命周期机制

有明确的经过精心设计生命周期，如：

OnInit

OnDoCheck

AfterContentInit

AfterContentChecked

AfterViewInit

AfterViewChecked
OnChanges
OnDestroy
启动
可以通过ng-app自动启动或代码启动
没有ng-app指令
一般通过代码启动根模块的方式启动
事件对象
在代码中随意使用事件对象
不建议在组件代码中使用事件对象，而推荐使用模版变量获取想要的值然后仅将值传到组件内部
事件过滤无
提供了类似VueJs的机制
依赖注入
基于名字（字符串）的注入
基于类（要利用强类型机制）的注入
提供者
规范定义的可配置的提供者机制，比较复杂
简化为工厂函数+简单的提供者定义对象
命名规范
零散的规定
完整的规范

整体来看，Angular2比AngularJs1.x简单且功能强大，但因为Angular使用TypeScript导致纯前端的开发工程师不容易上手；再加上Angular2与AngularJs1.x差异较大，AngularJs1.x的理念有时反而成为学习Angular2的障碍。

使用Angular2的原因
1． 希望使用TypeScript语言提高开发效率。TypeScript提供了比JavaScript更强大的面向对象编程能力，而且因为TypeScript是强类型的所以开发工具可以提供更强大的错误检查机制、代码重构机制，开发体验更好，效率更高。
2． Angular2简单，代表未来，更有生命力。

了解各种Web服务器及服务端技术
Java系：以Java EE（最早叫J2EE）中的Servlet（Web核心）、JSP（呈现HTML）、EJB（增强并规范Java语言面向对象特性）等为核心Web服务端开发技术，随后产生了很多相关技术和框架如：Structs（MVC）、Spring（解除耦合）、Hibernate（对象和关系型数据库的映射）等（Structs、Spring、Hibernate也常简称为SSH）。
PHP系：以PHP为核心的Web服务端开发技术，因为PHP语言及开发方式比较杂乱，因此产生了很多框架，如：Laravel、Symfony2、Nette、CodeIgniter、Yii、PHPixie、Zend Framework等，还有国产框架Think PHP。
.NET系：微软公司的Web服务端开发技术。使用C#、VB.NET等编程语言和.NET Framework，分为两大系列，早期的ASP.NET Web Form（组件化、事件驱动、与Windows应用程序的开发方式相似）、 和后来的ASP.NET MVC。另外ASP是微软在.NET之前的Web开发技术，与JSP一样古老。
其它：Node.js、Python、Ruby等