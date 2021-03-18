function myInstanceof(instance, myClass) {
  let pro = instance.__proto__
  while(true) {
    if (pro === null) return false
    if (pro === myClass.prototype) return true
    pro = pro.__proto__
  }
}

let a = new Number(1)
let b = []
console.log(a instanceof Number)
console.log(myInstanceof(b, Array));