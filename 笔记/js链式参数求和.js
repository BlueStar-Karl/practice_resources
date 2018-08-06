const fn = (num) => {
    const func = (temp) => {
        num += temp;
        return func;
    };
    func.toString = func.valueOf = () => num;
    return func;
};

fn(1)(2)(3)(4);  //10


/*
* toString方法和valueOf方法：
* 对象和函数有默认的toString和valueOf方法，toString方法优先级较高；有操作符时，调用valueOf方法
* */