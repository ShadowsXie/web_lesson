function myInstanceOf(instance, obj) {
  let proto = instance.__proto__
  while(true) {
    if(proto === null) return false
    if(proto === obj.prototype) return true
    proto = proto.__proto__
  }
}
