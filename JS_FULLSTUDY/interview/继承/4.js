function SuperType() {
  this.colors = ['red', 'green', 'blue']
}

function SubType() {
  SuperType.call(this)
} 

let instance1 = new SubType()
instance1.colors.push('pink')
console.log(instance1.colors);  // [']