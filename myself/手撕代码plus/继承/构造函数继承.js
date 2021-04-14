function Animal(name) {
  this.name = name
  this.getName = function() {
    return this.name
  }
}

Animal.prototype.getColor = function() {
  return this.colors
}

function Dog(name) {
  Animal.call(this, name)
  this.sex = 'm'
}

Dog.prototype.call = function() {
  console.log('123');
}

Dog.prototype = new Animal()

let dog = new Dog()
dog.call()

// 访问不到子类原型上面原有的属性