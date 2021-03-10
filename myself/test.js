let a = {
  b: 1
}

let c = new Proxy(a, {
  get: () => {
    return
  }
})

console.log(a.b);