function SuperType(name) {
  this.fname = name
}

SuperType.prototype.hobby = function() {
  return this.name
}

function SonType(name) {
  this.lname = name
}

SonType.prototype = new SuperType('谢')

let son1 = new SonType('fc')
console.log(son.lname, son.fname);