export function debounce(func, delay) {
  let timer

  return function (...args) {

    if(timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      func.apply(this, args)  //让func的this不被更改
    }, delay)
  }
}