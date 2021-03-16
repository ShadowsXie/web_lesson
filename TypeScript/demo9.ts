// static  可以让类中的方法不必实例化出对象就能调用
class Girl {
  static sayLove() {
    return 'I love you!'
  }
}

console.log(Girl.sayLove());
