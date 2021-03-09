function throttle(fn, delay) {
  let preTime = Date.now()
  return function() {
    let curTime = Date.now()
    if (curTime - preTime >= delay) {
      fn.apply(this, arguments)
      preTime = Date.now()
    }
  }
}

// function throttle(fn, delay) {
//   let flag = true
//   return function() {
//     if (!flag) return 
//     flag = false
//     setTimeout(() => {
//       fn.apply(this, arguments)
//       flag = true
//     }, delay)
//   }
// }
