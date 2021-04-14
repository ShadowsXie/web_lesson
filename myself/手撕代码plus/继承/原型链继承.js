function Animal() {
  this.colors = ['blue', 'red', 'green']
}

Animal.prototype.getColor = function() {
  return this.colors
}

function Dog() {
  this.name = 'dog'
}

Dog.prototype = new Animal()

let dog = new Dog()
console.log(dog.getColor());
let dog2 = new Dog()
dog2.colors.push('pink')
console.log(dog.getColor());



// 问题1：原型中包含的引用类型属性将被所有实例共享,即如果   修改（不是重新赋值 18行）  
//        其中的属性将导致所有实例属性被修改；
// 问题2：子类在实例化的时候不能给父类构造函数传参；