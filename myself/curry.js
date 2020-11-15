function curry(fn) {
  let arr = []
  return function(...args) {
    arr.push(...args)
    if (arr.length < fn.length) {
      return
    } else {
      fn.apply(null, arr)
    }
  }
}