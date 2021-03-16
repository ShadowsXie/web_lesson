class Person {
  // public name: string
  // constructor(name: string) {
  //   this.name = name
  // }

  constructor(public name: string) {}
}
class Teacher extends Person {
  constructor(public age: number) {
    super('wn')
  }
}

const teacher = new Teacher(18)
console.log(teacher.name);
console.log(teacher.age);
