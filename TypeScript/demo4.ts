interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number    //表示可选
  [propname: string]: any   //可加任何属性（属性名为string，值类型为any）
  say(): string
}
// 参数重复时，用接口来定义

interface Teacher extends Girl {      //继承
  teach(): string
}

class Xjj implements Girl {    //接口能限制类
  name = 'wn' 
  age = 18
  bust = 90
  say() {
    return "Hello"
  }
}

const girl = {
  name: 'wn',
  age: 18,
  bust: 94,
  sex: 'women',
  say() {
    return "Hello"
  }
}

const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
  girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰');
}

const screenDsc = (girl: Girl) => {
  console.log(girl.name);
  console.log(girl.age);
  console.log(girl.bust);
}

screenResume(girl)
screenDsc(girl)