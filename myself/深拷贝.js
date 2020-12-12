function deepClone(obj) {
  let res = {}
  Object.keys(obj).forEach( key => {
    if (obj[key] instanceof Object) {
      res[key] = deepClone(obj[key])
    } else {
      res[key] = obj[key]
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