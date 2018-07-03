/*继承首先定义一个父类，代码如下*/
function Animal(name) {
	//属性
	this.name = name || 'Animal';
	//实例方法
	this.sleep = function () {
		console.log(this.name + '正在睡觉！');
	}
}
//原型方法
Animal.prototype.eat = function(food) {
	console.log(this.name + '正在吃：' + food)
}

/*第一种：原型链继承*/

function Cat() {}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

/*
缺点：
1.来自原型对象的引用属性是所有实例共享的
2.创建子类实例时，无法向父类构造函数传参
*/

/*第二种：构造函数*/

function Cat(name) {
	Animal.call(this);
	this.name = name || 'Tom'
}

/*缺点:
1.只能继承父类的实例属性和方法，不能继承原型属性和方法
2.无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
*/

/*第三种：实例继承*/

function Cat(name) {
	var instance = new Animal();
	instance.name = name || 'Tom';
	return instance;
}

/*缺点：
1.实例是父类的实例，不是子类的实例
2.不支持继承多类
*/

/*第四种：拷贝继承*/

function Cat(name) {
	var animal = new Animal();
	for(var p in animal) {
		Cat.prototype[p] = animal[p]
	}
	Cat.prototype.name = name || 'Tom';
}

/*缺点：
1.效率低，内存占用高
2.无法回去父类不可枚举的方法
*/


/*第五种：组合继承*/

function Cat(name) {
	Animal.call(this);
	this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

/*缺点：
调用了两次父类构造函数，生成了两份实例
*/


/*第六种：寄生组合继承*/

function Cat (name) {
	Animal.call(this);
	this.name = name || 'Tom';
}
(function() {
	//创建一个没有实例方法的类
	var Super = function(){};
	Super.prototype = Animal.prototype;
	//将实例作为子类的原型
	Cat.prototype = new Super();
	Cat.prototype.constructor = Cat;
})()





