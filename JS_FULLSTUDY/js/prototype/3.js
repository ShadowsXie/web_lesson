

// Person.prototype.lastName = 'Fu'
// function Person(name) {
//     this.name = name
// }
// var person = new Person('jinglong')

// console.log(person.lastName)
// person.lastName = 'Yu'
// Person.prototype.lastName = 'Fu'    //改
// console.log(person.lastName)


// 删除
// delete person.lastName
// console.log(person.lastName)




function Bus() {

}
Car.prototype = {
    constructor: Bus
}
function Car() {

}
var car = new Car()
console.log(car.constructor) // function Car(){}
console.log(Car.prototype)
// constructor 为了让Car()构造出的所有的对象都能找到它自己的构造器