/*
通过class关键字，可以定义类
*/
class Point {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}

	toString () {
		return '(' + this.x + ',' + this.y + '}';
	}
}

/*
类里面的constructor方法，是构造方法；而this关键字则代表实例对象。
定义类中的方法的时候，不用添加function关键字
方法之间不需要逗号分隔，加了会报错
*/

typeof Point   //  function
Point === Point.prototype.constructor   //true

/*
类的数据类型是函数
类本身就指向构造函数
使用的时候，class类，必须用 new 命令
必须对类定义之后，才能调用，没有变量提升的概念
*/

/*
class Point {
	constructor () {
		//...
	}

	toString () {
		//...
	}
}

等同于

Point.prototype = {
	constructor () {},
	toString () {}
}

事实上，类的所有方法都定义在类的prototype属性上面
在类的实例上面调用方法，其实就是在调用原型上的方法

*/

class B {}
let b = new B();

b.constructor === B.prototype.constructor	//true

/*实例的constructor方法，就是类原型的constructor方法*/

/*
由于类的方法都定义在prototype对象上面，所以新方法可以添加在prototype对象上面
Object.assign方法可以很方便得一次向类添加多个方法
*/
class Point {
	constructor () {
		//...
	}
}

Object.assign(Point.prototype,{
	toString () {},
	toValue () {}
})

/*类的prototype对象的constructor属性，直接指向类本身。*/

Point.prototype.constructor === Point	//true

/*另外，类内部所有定义的方法，都是不可枚举的*/

Object.keys(Point.prototype)		//[]

/*
类的属性名，可以采用表达式
即如下：
*/

let methodName = 'getArea';
class Square {
	constructor (length) {
		//...
	}

	[methodName] () {
		//...
	}
}


/*
constructor方法是默认方法，通过 new 命令生成对象实例时，自动调用该方法。
一个类必须有 contructor 方法，如果没有显示定义，一个空白的 constructor 方法会被默认添加
constructor 方法默认返回实例对象（即this）
*/


/*
与 ES.5 一样，实例的属性除非显示定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
*/

class Point {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}

	toString () {
		return '(' + this.x + ',' + this.y + ')';
	}
}

var point = new Point(2,3);

point.toString();  // (2,3)

point.hasOwnProperty('x');		//true
point.hasOwnProperty('y');		//true
point.hasOwnProperty('toString');		//false
point._proto_.hasOwnProperty('toString');		//true


/*
与 ES.5一样，所有实例共享一个原型对象
*/
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1._proto_ = p2._proto_;

/*
p1与p2都是Point的实例，他们的隐式原型都是指向的类的显示原型，即Point.prototype,所以_proto_都是相等的
这也就意味着，可以通过实例的_proto_为类，添加方法
但实际上，_proto_是浏览器生产商添加的私有属性，为了避免对环境的依赖，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性
即：Object.getPrototypeOf(p1).toNumber = function(){};
*/


/*与函数一样，类也可以使用表达式的形式定义*/
const MyClass = class Me {
	getClassName () {
		return Me.name;
	}
}
/*
这个类的名字是 MyClass ，Me只是在Class内部代码可用，指当前类
*/


/*采用Class表达式，可以写出立即执行的Class*/
let person = new Class {
	constructor (name) {
		this.name = name;
	}

	sayName () {
		console.log(this.name)
	}
}('张三')；

person.sayName();	// 张三


/*不存在变量提升*/

/*
私有的属性和方法，ES 6，不提供，只能变通的方式模拟实现
*/

/*
私有方法实现通过将私有方法移出模块，内部改变指向
*/
class Widget {
	foo (baz) {
		bar.call(this,baz);
	}
	//...
}
function bar(baz) {
	return this.snaf = baz;
}

/*
私有属性，在属性名前使用 # 
私有属性与实例可以同名（比如 #x 与 get x() ）
*/
class Point {
	#x;

	//私有属性的读写，都通过 get x() 和 set x(value) 来实现
	get x() { return #x }

	set x(value) { #x = +value}

	constructor (x = 0) {
		#x = +x;
	}


	// # 也可以用来写私有方法
	#sun() { return #x }
}




/*
this指向
*/

class Logger {
	printName(name = 'there') {
		this.print(`Hello ${name}`)
	}

	print(text) {
		console.log(text)
	}
}

/*
类中如果含有this，它默认指向类的实例
但是一旦单独使用，很可能报错
解决方法：
1、使用 bind 绑定this
	class Logger {
		
		constructor() {
			this.printName = this.printName.bind(this)
		}

		printName(name = 'there') {
			this.print(`Hello ${name}`)
		}

		print(text) {
			console.log(text)
		}
	}

2、使用箭头函数
	class Logger {
		
		constructor() {
			this.printName = (name = 'there') => {
				this.print(`Hello ${name}`)
			};
		}

		print(text) {
			console.log(text)
		}
	}
*/

/*
name 属性
*/
class Point {}
Point.name 	//'Point'

/*
Class的取值函数(getter)和存值函数(setter)
在类的内部可以使用get和set关键字，对某个属性设置取值和存值函数，拦截该属性的存取行为
*/

class MyClass {
	constructor () {
		//...
	}

	get prop() {
		return 'getter'
	}

	set prop(value) {
		console.log('setter: ' + value)
	}
}


/*
Class的静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，只能通过类来调用，这就是静态方法
如果静态方法有 this 关键字，这个 this 指向的是类，而不是实例
静态方法可以与非静态方法重名
通过 extends 继承，父类的静态方法可以被子类继承
*/
class Foo {
	static classMethod() {
		return 'Hello'
	}
	static bar () {
		this.baz();
	}
	static baz () {
		console.log('hello')
	}
	baz () {
		console.log('world')
	}
}
Foo.classMethod()	//'Hello'
Foo.bar()			//'hello'


/*
静态属性
ES 6 只有静态方法，没有静态属性
可以在外部定义，内部定义无效
可以赋值定义
*/
class Foo {
	props: 1 	//无效
	static props: 1 	//无效

	props = 1;	//有效
	state = {
		count: 2 	//有效
	}
	static props = 3; 	//有效
}
Foo.prop = 1; 	//有效



/*
new.target属性
new是从构造函数生成实例的命令
ES 6 为new命令引入了一个new.target属性
如果构造函数不是通过new命令调用的，new.target会返回undefined
该属性用来确定构造函数是怎么调用的
*/

class Rectangle {
	constructor (length,width) {
		console.log(new.target === Rectangle)
		this.length = length;
		this.width = width
	}
}
var obj = new Rectangle(3,4);	//输出 true

/*
子类继承父类，new.target会返回子类
可以利用这个特点，写出不能独立使用，必须继承才能使用的类
*/

class Shape {
	constructor () {
		if(new.target === Shape) {
			throw new Error('本类不能被实例化')
		}
	}
}
class Rectangle extends Shape {
	constructor (length,width) {
		super();
		//...
	}
}
var x = new Shape();	//报错
var y = new Rectangle(3,4);		//正确



