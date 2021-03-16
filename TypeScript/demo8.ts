class XiaoJieJie {
  constructor(private _age:number) {}   //私有属性必须通过get属性才能访问，并且可以对数据处理
  get age() {
    return this._age - 10
  }
  set age(age: number) {    //对私有数据进行处理
    this._age = age + 3
  }
}
const wn = new XiaoJieJie(28)
wn.age = 25
console.log(wn.age);
