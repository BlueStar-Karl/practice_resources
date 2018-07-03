//引入
var _ = require('lodash');


//克隆
var a = {}; //创建一个元素数目较多的对象，否则复制时间太小，统计不精确
for(var i = 0; i < 100; i++) {
	a[i.toString()] = Math.floor(Math.random() * 100000);
}
var b = {}; //console.time(label); //console.timeEnd(label); //两者一一对应，用于统计两者之间的代码运行时间
console.time('native copy');
for(var key in a) {
	b[key] = a[key];
}
console.timeEnd('native copy');
var c = {};
console.time('lodash clone');
//克隆
c = _.clone(a);
console.timeEnd('lodash clone');

var array = []; //生成一个100w 长度的数组，并赋值随机数 
for(var i = 0; i < 100; i++) {
	array.push(Math.floor(Math.random() * 10000))
}
//原生forEach 遍历 
console.time('native for Each');
array.forEach(function(key) {});
console.timeEnd('native for Each'); //lodash forEach 遍历 
console.time('lodash for Each');
//遍历
_.forEach(array, function(key) {});
console.timeEnd('lodash for Each');

//循环
// 1. Basic for loop. 
for(var i = 0; i < 5; i++) {
	// .... 
}
// 2. Using Array's join and split methods 
Array.apply(null, Array(5)).forEach(function() {
	// ... 
});
// Lodash 
_.times(5, function() {
	// ... 
});

//迭代数组并返回每一项中深度嵌套的属性
// Fetch the name of the first pet from each owner 
var ownerArr = [{
	"owner": "Colin",
	"pets": [{
		"name": "dog1"
	}, {
		"name": "dog2"
	}]
}, {
	"owner": "John",
	"pets": [{
		"name": "dog3"
	}, {
		"name": "dog4"
	}]
}];
// Array's map method. 
ownerArr.map(function(owner) {
	return owner.pets[0].name;
});
// Lodash 
_.map(ownerArr, 'pets[0].name');

//在指定范围内获取一个随机值
// Get a random number between 15 and 20. 
// Naive utility method 
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
getRandomNumber(15, 20);
// Lodash 
_.random(15, 20);

//从列表中随机的选择列表项
var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

function pickRandomPerson(luckyDraw) {
	var index = Math.floor(Math.random() * (luckyDraw.length - 1));
	return luckyDraw[index];
}
pickRandomPerson(luckyDraw);
// John 
// Lodash 
_.sample(luckyDraw);
// Colin

//从某个对象中选择部分属性组成新的对象

// Naive method: Returning a new object with selected properties O
bject.prototype.pick = function(arr) {
	var _this = this;
	var obj = {};
	arr.forEach(function(key) {
		obj[key] = _this[key];
	});
	return obj;
};
var objA = {
	"name": "colin",
	"car": "suzuki",
	"age": 17
};
var objB = objA.pick(['car', 'age']);
// {"car": "suzuki", "age": 17} 
// Lodash 
var objB = _.pick(objA, ['car', 'age']);
// {"car": "suzuki", "age": 17}

//去掉对象的某些属性

// Naive method: Remove an array of keys from object 
Object.prototype.remove = function(arr) {
	var that = this;
	arr.forEach(function(key) {
		delete(that[key]);
	});
};
var objA = {
	"name": "colin",
	"car": "suzuki",
	"age": 17
};
objA.remove(['car', 'age']);
objA; 
// {"name": "colin"} 
// Lodash 
objA = _.omit(objA, ['car', 'age']); 
// {"name": "colin"}



_.find(collection, [predicate=_.identity], [fromIndex=0])			//遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。返回匹配元素

_.findIndex(array, [predicate=_.identity], [fromIndex=0])			//该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。(number): 返回找到元素的 索引值（index），否则返回 -1。