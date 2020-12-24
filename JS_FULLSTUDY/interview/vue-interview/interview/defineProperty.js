var data = {
  name: 'yuanlong',
  age: 18
}
observe(data)
let name = data.name  // get value
data.name = 'jinglong' // set value

function observe(obj) {
  Object.keys(obj).forEach(key => {
    defienReactive(obj, key, obj[key])
  })
}

function defienReactive(obj, key, val) {
  if (typeof val === 'object' && val !== null) {
    observe(val)
  }
  Object.defineProperty(obj, key, {
    get: () => {
      return val
    },
    set: (newVal) => {
      val = newVal
    }
  })
}