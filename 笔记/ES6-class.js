//ES6
'use strict'

//类的创建
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

var p1 = new Point(100, 100);


//类的继承
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
}

/*类，必须 new 才能调用*/


/*
类的主体
class的主体只能包含方法，不能包含数据属性
如果在类中包含变量定义，则会报错。
class中的方法有三种类型，构造函数、静态方法、原型方法
*/

class Class1 {
    //构造
    constructor(options) {

    }

    //静态方法，静态方法用static修饰
    static staticMethod() {
        return 'prototype method'
    }

    prototypeMethod() {
        return 'prototype method'
    }
}


/*
其中每个class和class原型的constructor都是相等的，同时class本质也是function
Class1 === Class1.prototype.constructor   -->  true
typeof Class1  -->  function
*/

class Class2 {
    get name() {
        return 'jay';
    }

    set name(value) {
        console.log('set name = ' + value)
    }
}

var c2 = new Class2();
c2.name = 'hu';   // set name = hu
console.log(c2.name);   //jay

/*类的继承*/
'use strict'

class Class1 {
    toString() {
        return 'parent class'
    }
}

class SubClass extends Class1 {
    toString() {
        return 'sub class'
    }
}

var sc = new SubClass();
sc.toString();
-- > 'sub class'
sc instanceof Class1-- > true
sc instanceof SubClass-- > true

/*如果想要调用父类方法*/
class SubClass2 extends Class1 {
    toString() {
        return super.toString();
    }
}

var sc2 = new SubClass2();
sc2.toString();
-- > "parent class"


/*在继承关系中，子类的原型等于父类*/
Object.getPrototypeOf(SubClass2) === Class1-- > true

/*在子类中访问父类构造，使用super即可*/
























