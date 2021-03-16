class Lady {
  content = 'Hello'
  sayHello() {
    return this.content
  }
}

class Xjj extends Lady {
  // sayHello() {        //父类方法重写
  //   return 'By'
  // }

  sayHello() {
    return super.sayHello() + '你好'    //父类方法扩展
  }
  sayLove() {
    return 'ILU'
  }
}

const goddess = new Xjj()
console.log(goddess.sayHello());
console.log(goddess.sayLove());
