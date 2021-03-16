interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number    //表示可选
}
// 参数重复时，用接口来定义

const girl = {
  name: 'wn',
  age: 18,
  bust: 94
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