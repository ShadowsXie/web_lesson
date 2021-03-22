function myInstanceof(instance, myClass) {
  let proto = instance.__proto__
  while(true) {
    if(proto === null) return false
    if(proto === myClass.prototype) return true
    proto = proto.__proto__
  }
}