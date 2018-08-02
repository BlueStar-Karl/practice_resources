1.含义
	扩展运算符就是三个点（...），将一个数组转为用逗号分隔的参数序列。
	
	主要用于函数调用。

	function add(x,y) {
		return x + y;
	}
	var numbers = [4,38];
	//将一个数组，转化为参数序列
	add(...numbers);

	扩展运算符与正常的函数参数可以结合使用，非常灵活。

2.代替数组的apply方法
	//ES5写法
	var arr1 = [0,1,2];
	var arr2 = [3,4,5];
	Array.prototype.push.apply(arr1,arr2);
	//ES6写法
	var arr1 = [0,1,2];
	var arr2 = [3,4,5];
	arr1.push(...arr2);

3.应用
	(1)合并数组
		//ES5
		arr1.concat(arr2,arr3);
		//ES6
		[...arr1,...ar2,...arr3]

	(2)与解构赋值结合
	   当扩展运算符用于数组赋值时，只能放在参数的最后一位

		const [first,...rest] = [1,2,3,4,5]
		first //1
		resr  //[2,3,4,5]

		const [first,...rest] = []
		first //undefined
		rest  //[]

		const [first,...rest] = ['foo'];
		first //'foo'
		rest  //[]
		
	(3)函数的返回值
		JavaScript的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象。扩展运算符提供了解决这个问题的一种变通方法。

	(4)字符串
		扩展运算符可以将字符串转为真正的数组

		[...'hello']
		//['h'e,'l','l','o']

		这种方法能正确识别32位的Unicode字符

	(5)实现了lterator接口的对象
		var nodeList = document.querySelectorAll('div');
		var array = [...nodeList];
		//将一个伪数组转化伪数组

		对于没有部署lterator接口的数组的对象，扩展运算符就无法将其转化为真正的数组；强行使用，将会报错。

	(6)Map和Set结构，Generator函数
		扩展运算符内部调用的是数据结构的lterator接口，因此只要有lterator接口的对象，都可以使用扩展运算符，比如Map、Set结构，Generator函数。

		let map = new Map([
				[1,'one'],
				[2,'two'],
				[3,three]
			])

		let arr = [...map.keys()]; 	//[1,2,3]





