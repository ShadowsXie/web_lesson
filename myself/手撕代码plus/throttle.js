function throttle1(fn, delay) {
  let preDate = Date.now()
  return function() {
    let nowDate = Date.now()
    if(nowDate - preDate > delay) {
      fn.call(this, ...arguments)
      preDate = Date.now
    }
  }
}


function throttle2() {
  let flag = true
  return function() {
    if(!flag) return
    flag = false
    setTimeout(() => {
      fn.call(this, ...arguments)
      flag = true
    }, delay)
  }
}
