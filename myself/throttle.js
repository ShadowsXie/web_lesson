function throttle(fn, delay) {
  let preTime = Date.now()
  return function() {
    let now = Date.now()
    if (now - preTime >= delay) {
      fn.apply(this, arguments)
      preTime = Date.now()
    }
  }
}

// 用当前时间减去之前存储的时间，若差值大于规定时间则可执行


function throttle1(fn, delay) {
  let flag = true
  return function() {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, delay); 
  }
}

// 如果flag是false就退出，当一定时间内flag是不会变为true的，除非过了这段时间