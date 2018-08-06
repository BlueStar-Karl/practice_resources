const fn = (num) => {
    const func = (temp) => {
        num += temp;
        return func;
    };
    func.toString = func.valueOf = () => num;
    return func;
};

fn(1)(2)(3)(4);  //10