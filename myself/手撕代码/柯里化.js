function curry(fn) {
  let arr = []
  function t() {
    arr = [...arr, ...arguments]
    if (arr.length === fn.length) {
      let arg = arr
      arr = []
      return fn.call(this, ...arg)
    }
    return t
  }
  return t
}

function sum(a, b, c) {
  return a + b + c
}

let add = curry(sum)
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1, 2, 3));