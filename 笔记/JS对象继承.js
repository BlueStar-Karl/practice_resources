/*既然要实现继承，首先要有一个父类*/

//定义一个动物类
function Animal(name){
	//属性
	this.name = name || "Animal";
	//实例方法
	this.sleep = function(){
		console.log(this.name + '正在睡觉！')
	};
}
//原型方法
Animal.prototype.eat = function(food){
	console.log(this.name + "正在吃:" + food)
}


/*一.原型链继承
核心：将父类的实例作为子类的原型*/

function Cat(){
	//...
}
Cat.prototype = new Animal();
Cat.prototype.name = "cat";


/*二.构造继承
核心:使用父类的构造函数来增强子类实例，等于是赋值父类的实例属性给子类*/

function Cat(name){
	Animal.call(this);
	this.name = name || 'Tom';
}


/*三.实例继承
核心:为父类实例添加新特性,作为子类实例返回*/

function Cat(name){
	var instance = new Animal();
	instance.name = name || "Tom";
	return instance;
}


/*四.拷贝继承*/

function Cat(name){
	var animal = new Animal();
	for(var p in animal){
		Cat.prototype[p] = animal[p]
	}
	Cat.prototype.name = name || "Tom";
}


/*五.组合继承
核心:通过调用父类构造,继承父类的属性并保留传参的优点,然后通过将父类实例作为子类原型,实现函数复用*/

function Cat(name){
	Animal.call(this);
	this.name = name || "Tom";
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;


/*六.寄生组合继承
核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免组合继承的缺点*/

function Cat(name){
	Animal.call(this);
	this.name = name || "Tom";
}
(function(){
	//创建一个没有实例方法的类
	var Super = function(){};
	Super.prototype = Animal.prototype;
	//将实例作为子类的原型
	Cat.prototype = new Super();
	Cat.prototype.constructor = Cat;
})()
