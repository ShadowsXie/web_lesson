// 类的访问类型： private protected public
// 类的内部和类的外部
// public: 类的内部和外部都能使用
// private： 只能在类的内部使用，继承的子类也不能使用
// protected：只能在类的内部使用,但是能在继承的类中使用
class Person {
  // protected name: String
  public name: String
  public sayHello() {
    console.log(this.name + 'hello');
  }
}

class Teacher extends Person {
  public sayBye() {
    this.name
  }
}

const person = new Person()
person.sayHello()
person.name = 'wn'
console.log(person.name);
