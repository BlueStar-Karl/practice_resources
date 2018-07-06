/*一.Object构造函数创建*/
	var Person = new Object();
 
/*二.字面量*/
	var Person = {}

/*三.工厂模式
核心:在函数内部创建对象*/
	function createPerson(name,age,job){
		var o = new Object();
		o.name = name;
		o.age = age;
		o.job = job;
		o.sayName = function() {
			alert(this.name);
		};
		return o;
	}
	

/*四.构造函数
核心：使用时，需要将构造函数实例化*/
	function Person(name, age, job) {
		this.name = name,
		this.age = age,
		this.job = job,
		this.sayName = function() {
			alert(this.name);
		}
	}
	var person = new Person('Nike', 29, 'teacher');
	
/*五.原型创建*/
	function Person(){
		//...
	};
	Person.prototype.name = 'Nike';
	Person.prototype.age = 20;
	Person.prototype.jbo = 'teacher';
	Person.prototype.sayName = function() {
		alert(this.name);
	};
	var person1 = new Person();

/*六.组合使用构造函数和原型模式*/
	function Person(name,age,job){
		this.name =name;
		this.age = age;
		this.job = job;
	}
	Person.prototype = {
		constructor:Person,
		sayName: function(){
	 		alert(this.name);
		}
	}
	var person1 = new Person('Nike',20,'teacher');

