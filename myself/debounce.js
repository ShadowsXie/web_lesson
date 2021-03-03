// function debounce(fn, delay) {
//   let timer = null
//   return function () {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.apply(this, arguments)
//     }, delay)
//   }
// }

// debounce只有第一次会执行，返回一个函数后，再执行的话只是执行这个返回的函数，所以timer = null 不会执行

// function debounce(fn, delay) {
//   let timer = null
//   return function() {
//     clearTimeout(timer)
//     let timer = setTimeout(() => {
//       fn.apply(this, arguments)
//     }, delay)
//   }
// }




function debounce(fn, delay) {
  let timer = null
  return function() {
    clearTimeout(timer)
    let timer = setTimeout(() =>{
      fn.apply(this, arguments)
    }, delay)
  }
}