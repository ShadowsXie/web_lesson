let myNew = function(fn) {
  let obj = {}
  obj.__proto__ = fn.prototype
  let args = [...arguments].splice(1)
  let result = fn.apply(obj, args)
  return typeof result === 'object' ? result : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

let p1 = new Person('xiaomin', 15)
let p2 = myNew(Person, 'xiaozhang', 20)
console.log(p1, p2);