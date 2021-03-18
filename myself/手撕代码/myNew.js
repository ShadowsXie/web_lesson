function myNew(fun) {
  let obj = {}
  obj.__proto__ = fun.prototype
  let args = [...arguments].splice(1)
  fun.apply(obj, args)
  return obj
}

function Person(name) {
  this.name = name
}

let p1 = new Person('wn')
let p2 = myNew(Person, 'wn')

console.log(p1, p2);