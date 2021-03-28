function Parent(name) {
  this.name = name
  this.sex = 'man'
  this.hobby = [1, 2, 3]
}

function Son(age, name) {
  Parent.call(this, name)
  this.age = age
}

Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son

let son1 = new Son(18, 'wn')
let son2 = new Son(17, 'mg')
son2.hobby.push(4)
console.log(son1.sex, son1.hobby)
console.log(son2.sex, son2.hobby)

