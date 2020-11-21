function throttle(fn1) {
  let pre = 0
  return function() {
    let nowDate = Date.now()
    if (nowDate - pre >= 2000) {
      fn()
      pre = nowDate
    }
  }
}


function throttle(fn) {
  let timeout
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this)
        timeout = null
      }, 2000);
    }
  }
}

// 防抖
function debounce() {
  let timer
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, 2000);
  }
}