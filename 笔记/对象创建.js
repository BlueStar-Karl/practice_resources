/*第一种：Object构造对象创建*/

var Person = new Object();
Person.name = 'Nike';
Person.age = 29;


/*这行代码创建了Object引用类型的一个新实例，然后把实例保存在变量Person中*/

/*第二种：使用对象字面量的方式*/

var Person = {};	//相当于ver Person = new Object();
var Person = {
	name: 'Nike',
	age: '29'
}

/*
对象字面量是对象定义的一种简写形式，目的在于简化创建包含大量属性的对象的过程。也就是说，第一种和第二种方式创建对象的方法都是一样的，只是写法上的不同。
第一种和第二种方式的缺点在于：他们都是用了同一接口创建很多对象，会产生大量的重复代码，就是如果你有100个对象，那你要输入100次相同的代码
*/

/*第三种：使用工厂方式创建对象*/

function creatPerson(name,age,job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name)
	}
	return o;
}
var person1 = creatPerson('Nike',29,'teacher');
var person2 = creatPerson('Arvin',20,'student');

/*由于返回的是一个对象，我们无法判断返回的对象究竟是一个什么样的类型*/


/*第四种：使用构造函数创建对象*/

function Person (name,age,job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function () {
		alert(this.name)
	}
}
var person1 = new Person('Nike',29,'teacher');
var person2 = new Person('Arvin',20,'student');


/*对比工厂方式，我们发现一下区别
1.没有显示的创建对象
2.直接将属性和方法赋给了this对象
3.没有return语句
4.可以使用instanceof操作符判断对象类型
  person1 instanceof Object  ---->   true
  person2 instanceof Person  ---->   true

缺点：
	所有的方法都在实例内创建，一些公共的方法被反复创建，增加了不必要的内存
*/


/*第五种：原型创建对象*/

function Person () {

}
Person.prototype.constructor = Person;
Person.prototype.name = 'Nike';
Person.prototype.age = 20;
Person.prototype.job = 'teacher';
Person.prototype.sayName = function () {
    alert(this.name);
}
var person1 = new Person();
var person2 = new Person();
person1.name = 'Greg';
alert(person1.name);   //'Greg'  ---->  来自实例
alert(person2.name);   //'Nike'  ---->  来自原型


/*缺点：为对象添加一个实例属性时，会屏蔽原型对象的同名属性*/


/*第六种：组合使用构造函数模式和原型模式*/
 
function Person(name,age,job) {
 	this.name = name;
 	this.age = age;
 	this.job = job;
}
Person.prototype = {
 	constructor: Person,
 	sayName: function() {
 		alert(this.name)
	}
}

var person1 = new Person('Nike',20,'teacher');

