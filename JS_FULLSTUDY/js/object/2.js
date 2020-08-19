//  构造函数
function Student(name, age, sex) {
    // var this = {       // new完之后隐式创建一个this对象
        // name: ''
        // age: ''
    // }
    this.name = name
    this.age = age
    this.sex = sex
    this.grade = 2017
    return 123         // 显式的 return 无作用，除非 return 对象(包括数组)
    // return this     最后隐式返回this
}
function Test() {

}

var student = new Student('jiahao', 22, 'boy')
console.log(student)

// 模拟构造函数
// function Person(name, age) {
//     var that = {}
//     that.name = name
//     that.age = age
//     return that
// }
// var person = Person('wn', 18)
// console.log(person)