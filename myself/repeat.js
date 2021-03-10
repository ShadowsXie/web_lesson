function repeat (func, times, wait) { 
  let time = times
  return function(str) {
    let id = setInterval(() => {
      if (time > 0) {
        func(str) 
        time --
      } else {
        clearInterval(id)
      }
    }, wait)
  }
}
const repeatFunc = repeat(console.log, 4, 3000)
repeatFunc("helloworld")//会输出四次helloworld，每次间隔3s