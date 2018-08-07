function bigMut(big, common) {

    //将数字转换为字符串
    big += "";
    common += "";

    //值的交换，位数大的值放到 big 参数中，位数小的值放到 common 中
    if (big.length < common.length) {
        big = [common, common = big][0];
    }

    //将位数大的值，拆分，逆序
    big = big.split("").reverse();
    var oneMutManyRes = [];
    var i = 0,
        len = big.length;

    //个位数和一个大数相乘
    for (; i < len; i++) {
        oneMutManyRes[oneMutManyRes.length] = oneMutMany(big[i], common) + getLenZero(i);
    }

    //大数相加
    var result = oneMutManyRes[0];
    for (i = 1, len = oneMutManyRes.length; i < len; i++) {
        result = bigNumAdd(result, oneMutManyRes[i]);
    }

    return result;
}

//长度为n，末尾补n个0
function getLenZero(len) {
    len += 1;
    var ary = [];
    ary.length = len;
    return ary.join("0");
}

//个位数和一个大数相乘
function oneMutMany(one, many) {
    //number类型转换为字符串
    one += "";
    many += "";

    //如果 one 的长度不为 1，交换数值（都为 1，这里做的容错处理）
    if (one.length != 1) {
        one = [many, many = one][0];
    }

    //字符串转换为number类型
    one = parseInt(one, 10);

    //变量声明
    var i = 0,
        len = many.length,
        resAry = [],
        addTo = 0,
        curItem,
        curRes,
        toSave;

    //many字符串，拆分，逆序
    many = many.split("").reverse();

    //进位运算
    for (; i <= len; i++) {
        curItem = parseInt(many[i] || 0, 10);
        curRes = curItem * one + addTo;
        toSave = curRes % 10;
        addTo = (curRes - curRes % 10) / 10;
        resAry.unshift(toSave);
    }
    if (resAry[0] == 0) {
        resAry.splice(0, 1);
    }
    return resAry.join("");
}

//大数相加
function bigNumAdd(big, common) {
    big += "";
    common += "";
    var maxLen = Math.max(big.length, common.length),
        bAry = big.split("").reverse(),
        cAry = common.split("").reverse(),
        i = 0,
        addToNext = 0,
        resAry = [],
        fn,
        sn,
        sum;
    for (; i <= maxLen; i++) {
        fn = parseInt(bAry[i] || 0);
        sn = parseInt(cAry[i] || 0);
        sum = fn + sn + addToNext;
        addToNext = (sum - sum % 10) / 10;
        resAry.unshift(sum % 10);
    }
    if (resAry[0] == 0) {
        resAry.splice(0, 1);
    }
    return resAry.join("");
}

bigMut('123456789123456789','987654321987654321');