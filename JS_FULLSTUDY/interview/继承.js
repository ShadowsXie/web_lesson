// 题目
// 填充 inherit 完成输出。
function inherit(PConstructor, prototypeObj) {
  function F(name) {
    PConstructor.call(this, name)
  }
  // 给自身加了个 prototype
  F.prototype = prototypeObj
  // 继承过来的方法
  F.prototype.__proto__=PConstructor.prototype
  return F
}

let animalNum = 0;
function Animal(name) {
  animalNum ++;
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
};
const Cat = inherit(Animal, {  
  say:function() {
    console.log(`NO${animalNum}:${this.getName()}`);
  }
});
// Cat
const cat1 = new Cat('小花');
cat1.say(); // NO1:小花
