var arr = [1,2,3,2,'1',function(){}];

// 方法一
Array.prototype.removal1 = function () {
    let temp = [];
    let obj = {};
    let val = undefined;
    let itemType = undefined;
    for(let i = 0; i < this.length; i++) {
        val = this[i];
        itemType = typeof val;
        if(!obj[val]) {
            obj[val] = [itemType];
            temp.push(val)
        } else if(obj[val].indexOf(itemType) < 0) {
            obj[val].push(itemType);
            temp.push(val)
        }
    }
    return temp
}
arr.removal1()