// function Person(name) {
//   this.name = name
// }
// let p = new Person('Tom')

// // 1. p._protp_ = ?    Person.prototype
// // 2. Person._proto_=?    Function.prototype



// var foo = {}
// var F = function() {}

// Object.prototype.a = 'value a'
// Function.prototype.b = 'value b'

// // console.log(foo.a)
// // console.log(foo.b)
// // console.log(F.a)
// // console.log(F.b)




function Person(name) {
  this.name = name
}
let p = new Person('Tom')

// p = { name: 'Tom' }


// new 的实现原理
// function myNew(fun) {
  // return function() {
  //   let obj = {
  //     _proto_: fun.prototype
  //   }
  //   fun.call(obj, ...arguments)
  //   return obj
  // } 
// }

// let obj = myNew(Person)('fu', 20)
// console.log(obj)



function myNew() {
  // 创建一个实例对象
  let obj = {}
  // 取到外部传进来的构造器
  let Constructor = Array.prototype.shift.call(arguments)
  // 实现继承，要实例可以访问构造器的属性
  obj._proto_ = Constructor.prototype
  // 调用构造器，改变其this指向到实例
  let ret = Constructor.apply(obj)
  return typeof ret === 'object' && ret !== null ? ret : obj
}

const Test = function(name) {
  this.name = name
}
let newObj = myNew(Test, 'yuanlong')

