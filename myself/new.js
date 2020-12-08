function mynew(fn) {
  let obj = {}
  obj.__proto__ = fn.prototype
  let args = [...arguments].splice(1)
  let result = fn.call(obj, ...args)
  return typeof result === 'object' ? result : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

let a = new Person(1, 2)
let b = mynew(Person, 3, 4)
console.log(a);
console.log(b);