function deepClone(obj) {
  let res = {}
  Object.keys(obj).forEach( k => {
    if (obj[k] instanceof Object) {
      res[k] = deepClone(obj[k])
    } else {
      res[k] = obj[k]
    }
  })
  return res
}

let a = {
  b: 1,
  c: {
    d: 2,
    e: {
      f: 1
    }
  }
}

let b = deepClone(a)
let c = Object.assign({}, a)
a.c.e.f = 100
console.log(a, b, c);