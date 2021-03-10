// function curry(fn) {
//   let arr = []
//   function t(...args) {
//     arr.push(...args)
//     if (arr.length < fn.length) {
//       return t
//     } else {
//       let arg = arr
//       arr = []
//       return fn.apply(null, arg)
//     }
//   }
//   return t
// }
// let sum = (a, b, c) => a + b + c
// let fun = curry(sum)
// console.log(fun(1)(2, 3), fn(1)(2)(3));

// let sum = curry(sum1)
// console.log(sum(1)(2)(3), sum(1)(2, 3));














function curry(fn) {
  let res = []
  function a(...args) {
    res.push(...args)
    if (res.length < fn.length) {
      return a 
    } else {
      let arg = res
      res = []
      return fn.call(this, ...arg)
    }
  }
  return a
}

function sum (a, b, c) {
  return a + b + c
}
const curriedSum = curry(sum)
console.log(curriedSum(1, 2, 3))
console.log(curriedSum(1)(2,3))
console.log(curriedSum(1)(2)(3))

