1.angular
	一个js框架，现在主要用于后台管理系统
	针对于单页面应用和商业业务流程性（页面数据比较复杂）应用的开发
	后台主导的应用，首选angularJS

2.MVC
	Model -- 数据模型
	View  -- 视图
	Controller -- 控制器

3.$scope作用域
	
	必须通过挂载数据才能使用
	
	$scope		局部作用域
	$rootScope	全局作用域

4.依赖注入
	
	普通函数
	function fn1() {

	}

	注入函数：
	function fn2($scope,$rootScope) {
		//依赖注入函数的参数名不能更改
	}

	/*ng控制器里面形参的顺序可以改变，但是参数名不能改变*/

5.服务
	需要什么服务，自己加载什么服务。
	JS原生的延时器方法，不会更新视图，所以angular自己定义了一个$timeout服务,来代替原生方法，以便更新视图。
	
	$scope 				//作用域
	$rootScope			//全局作用域
	$timeout 			//延时
	$filter 			//筛选
	$http				



6.指令
	ng-app				//在当前元素启用angular（可以局部使用，但是不推荐）
	ng-controller		//挂在控制器
	ng-rpeat			//相当于vue的v-for
	ng-click			//点击事件
	ng-model			//双向数据绑定
	ng-bind				//绑定HTML数据到应用程序数据
	ng-src				//图片引用资源，需要双大括号{{}}
						/*
							ng-src = "{{data.goodsimg}}"
						*/
	ng-init				//初始化
	a 					//angular对a标签做了优化
	// ng-class 			
	ng-style			
						/*
							<p ng-class="{red:true}" ng-style="{color:'red'}">
								{{color}}
							</p>
						*/

	ng-bind
	ng-bind-template	//多个
	ng-bind-html		//标签输出（需要插件配合：angular-sanitize.js）
	ng-cloak			//标签解析出来再显示
	ng-non-bindable		//不当做表达式输出

	需要双大括号的ng指令
		ng-href
		ng-src
		ng-bind-template	

	ng-show				//元素显示		
	ng-hide				//元素隐藏
	ng-if				//添加或移除元素
	ng-swith				//切换
							/*
								<div ng-swith='show'>
								</div>
							*/
		on					//可以使用on绑定
							/*
								<div ng-swith='' on='show'>
								</div>	
							*/
		ng-swith-default	//默认状态
							/*
								<div ng-swith='' on='show'>
									<p ng-swith-defalut=''>defalut</p>
								</div>	
							*/
		ng-swith-when		//某条件下显示
		/*
								<div ng-swith='' on='show'>
									<p ng-swith-when='true'>true</p>
									<p ng-swith-when='false'>false</p>
								</div>	
							*/

		表单相关指令
		ng-disabled
		ng-readonly
		ng-checked
		ng-value

		表单验证
		


7.filter过滤器
	currency 		//格式化数字为货币格式
	filter 			//从数组中选择一个子集：模糊查询
	orderBy			//根据某个表达式排列数组,可以用true或false，代表是否为反向排序
	lowercase 		//格式化字符串为小写
	uppercase 		//格式化字符串为大写
	number 			//格式化数字，可以选择保留小数位数
	date 			//时间格式化
	limitTo 		//截取
	json 			//格式json

	组合使用：
		data | uppercase | limitTo:2

	在js中使用：
		$filter("orderBy")(data,'price')
					|		 | 	   |
	  //(使用哪个过滤器)，(数据，根据哪个属性过滤)

	自定义过滤器：
		var m1 = angular.module("myApp",[]);
		m1.filter(name,function(){
			//data为内置参数，代表需要处理的数据
			return function(data,param) {
				//...
				return data;
			}
		})


8.$scope子服务
	必须使用angular的方法监听和更改数据，才能变更数据，实现双向数据绑定。
	如果用$watch监听一个复杂对象，需要设置第三个参数为true

	$apply				//告诉页面，m变了，v也要变
						/*
							$scope.$apply(function(){
								
							})
						*/
	$watch				//监听$scope的某个属性是否发生改变
						/*
							$scope.product = {
								price:100,
								number:10,
								pName:"商品1"
							}
							$scope.$watch("product",function(newVal,oldVal){
								$scope.sum = $scope.product.number * $scope.product.price;
							},true)
						*/


9.angular的模块化
	angular.module('模块1（模块名字）',['模块1所依赖的模块2'])
			.controller('控制器名称',['$scope','$rootScope','timeout',function(a,b,c){
				//a =>	$scope
				//b =>	$rootScope
				//c =>	$timeout
				//实参和形参，一一对应，虽说形参名可以更改，但是不建议更改
			}])

	方法：controller，run，filter，directive

10.angularJS工具方法
	angular.isArray() 			//是不是数组
	angular.isDate() 			//是不是时间对象
	angular.copy(source,[destination]) 		//对象的深拷贝，返回新对象，source:源对象，destination:存储复制后的目标（可选）
	angular.extend(dst,src)		//几成，dst继承src，src可以有多个
	angular.bind(self,fn,args)	//返回一个新的函数，绑定这个函数的this值指向self
									/*var obj = {
										name: 'lili',
										show:function(country){
											console.log(this.name + country)
										}
									}
									var self = {name:'wang'};
									var bindShow = angular.bind(bind,obj.show,'china')*/
	angular.toJson()			//js对象转json字符串
	angular.equals(o1,o2)		//长得一样的，比较两个对象、值或表达式是否相等
	angular.isElement(value)	//判断一个对象是否是dom对象，包括jq对象
									/*angular.isElement($('body'))
									angular.isElement(document.getElementsByTagName('body'))*/


11.$http
	angular自带的一个ajax请求函数
	$http({'method':'GET','url':'/someUrl'}).success(function(data){
		//成功的回调方法
	}).error(function(data){
		//失败的方法
	})
	//method可选：get、post、jsonp

	$http.get('/someUrl').success(successCallback); 

	$http.post('/someUrl',data).success(successCallback);

	$http.jsonp(url+'callback=JSON_CALLBACK').success(successCallback);
	










	
