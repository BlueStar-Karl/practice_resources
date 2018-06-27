//在函数内部时，this指向取决于函数的调用方式
/*
//对象中，this指向对象
var pet = {
    words: '...',
    speak: function () {
        console.log(this.words)
        console.log(this == pet)
    }
}

pet.speak()*/

/*
//函数中，指向调用环境，全局调用默认指向全局对象
function pet(words) {
    this.words = words;
    console.log(this.words);
    console.log(this == global)
}

pet('...')*/

//构造函数，this指向实例对象
function Pet(words) {
    this.words = words;
    this.speak  = function () {
        console.log(this.words)
        console.log(this)
    }
}
var cat  = new Pet('Miao')

cat.speak()