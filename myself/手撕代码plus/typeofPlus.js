function myTypeof(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  return res.substring(0, res.length - 1).toLowerCase()
}

console.log(myTypeof(null));