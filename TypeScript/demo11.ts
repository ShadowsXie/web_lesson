// 抽象类：抽象类的方法没有具体的内容，继承的类必须具体化
abstract class Person{
  abstract skill()
}


class teacher extends Person {
  skill() {
    // 业务逻辑
    console.log('我是老师！');
  }
}

class police extends Person {
  skill() {
    console.log('我是警察！');
  }
}

class doctor extends Person {
  skill() {
    console.log('我是医生！');
  }
}