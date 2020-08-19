

// function Person() {
//     // var this = {
//     //     _proto_:Person.prototype
//     // }
// }
// var person = new Person()
// // console.log(person)


// var obj = {
//     name: '蜗牛'
// }
// console.log(person._proto_) // {name: 'wn'}
// person._proto_ = obj
// console.log(person._proto_)




// ???
Person.prototype.name = 'wn'
function Person() {
    // this = {
    //     _proto_: Person.prototype
    // }
}
var person = new Person()   // var person = Person.prototype
Person.prototype = {  // 把原型重新赋值 Person.prototype = {xxxx02}
    name:'pipi'
}
console.log(person.name)
