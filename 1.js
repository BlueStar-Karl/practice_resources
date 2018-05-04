//数组去重
var arr = [1, '1', 'afdaf', null, undefined];
unique(arr)

function unique(array) {
	var n = {},
		r = [],
		len = array.length,
		val,
		type;
	for(var i = 0; i < array.length; i++) {
		val = array[i];
		type = typeof val;
		console.log(val, type);
		if(!n[val]) {
			n[val] = [type];
			console.log(n)
			r.push(val);
		} else if(n[val].indexOf(type) < 0) {
			n[val].push(type);
			console.log(n)
			r.push(val);
		}
	}
	return r;
}

//深拷贝

var arr = [
	1,
	{
		a: 2,
		eat: function() {
			console.log(3)
		}
	}
];

// let [...arr2] = arr;
let arr2 = JSON.parse(JSON.stringify(arr)).concat()
