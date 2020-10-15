function Person() {}
var p1 = new Person()

// console.log(p1.constructor);
Person.prototype = {
  name: '小花',
  constructor: Person
}
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false
})
var p2 = new Person()
console.log(p2.constructor);