var num = 123
num.toString()    // '123'    ----> new Number(num).toString()





// 方法重写
Object.prototype.toString = function() {
    return 'hahaha'
}

function Person() {

}
var person = new Person()
console.log(person.toString())