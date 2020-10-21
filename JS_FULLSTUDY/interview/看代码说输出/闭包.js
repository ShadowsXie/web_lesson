// AO VO es3 概念
// 执行上下文 es6
// 每门语言 都有 作用域
// 作用域： 词法（静态）作用域  动态作用域
var x = 10;
var y = 20;
// foo 定义完 x y 跟它在哪里调用无关
function foo() {
  console.log(x, y);
}
foo(); // 10, 20 
function bar() {
  var y = 30;
  console.log(x, y); // 10, 30
  foo(); // 10, 20
} 
bar(); // 10 30






function makea() {
  let flag = false
  return function() {
    let res = flag ? 2 : 1
    flag = !flag
    return res
  }
}
let a = makea()
console.log(a());
console.log(a());
console.log(a());
console.log(a());


// 实现一个 getPrime 质数
let getPrime = makePrime()
getPrime() // 2
getPrime() // 3
getPrime() // 5

function makePrime() {
  let val = 1
  function isPrime(v) {
    let res = []
    for (let i = 1; i <= v; i ++) {
      if (v % i === 0) res.push(i) 
    }
    return res.length === 2 && res[0] === 1 && res[1] === v
  }
  return function() {
    val ++
    while(!isPrime(val)) {
      val ++
    }
    return val
  }
}
