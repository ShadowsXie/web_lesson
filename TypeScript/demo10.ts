// 只读属性
class Person {
  public readonly _name: string
  constructor(public name: string) {
    this._name = name
  }
}

const person = new Person('jspang')
// person._name = 'wn'       报错 _name 为只读属性
console.log(person._name);
