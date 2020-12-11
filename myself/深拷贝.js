function deepClone(obj) {
  let a = {}
  Object.keys(obj).forEach( key => {
    if (obj[key] instanceof Object) {
      a[key] = deepClone(obj[key])
    } else {
      a[key] = obj[key]
    }
  });
  return a
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
b.c.e.f = 100
console.log(a, b);