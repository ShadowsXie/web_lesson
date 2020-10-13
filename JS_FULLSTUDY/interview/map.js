// map 的使用方法 , 能不能自己写 一个 map 呢?

let a = [1, 2, 3]
let s = a.map(x => x + 1)  // [2, 3, 4] 不会对原数组有影响

Array.prototype.map = function(func) {
  let arr = this
  let newArr = []
  arr.forEach(element => {
    let a = func(element)
    newArr.push(a)
  });
  return newArr
}

let c = a.map(x => x + 2)
console.log(c);