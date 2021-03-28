function Parent(name) {
  this.name = name
  this.sex = 'man'
  this.hobby = [1, 2, 3]
}

function Son(age) {
  this.age = age
}

Son.prototype = new Parent()

let son1 = new Son(18)
let son2 = new Son(17)
son2.sex = 'wm'
son2.hobby.push(4)
console.log(son1.sex, son1.hobby)
console.log(son2.sex, son2.hobby)