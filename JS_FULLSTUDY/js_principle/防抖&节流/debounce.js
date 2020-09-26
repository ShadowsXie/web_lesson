// 在规定的时间内未触发第二次，则执行
function debounce(func, delay) {
  // 利用闭包保存定时器
  let timer = null
  return function() {
    // 在规定的时间内再次触发会清除定时器后再重新设定时器
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }
}

window.onscroll = debounce(function() {
  console.log('scroll');
}, 1000)