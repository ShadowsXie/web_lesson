function curry(fn) {
  let res = []
  function a(...arg) {
    res.push(...arg)
    if (res.length < fn.length) {
      return a
    } else {
      return fn.call(this, ...res)
    }
  }
  return a
}

function sum1(a, b) {
  return a + b
}

let sum = curry(sum1)
console.log(sum(1)(2), sum(1, 2));
