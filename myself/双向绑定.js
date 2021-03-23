let person = {
  name: 'wn',
  age: 18
}

function observer(obj) {
  if(typeof obj !== 'object') {
    return
  }
  let keys = Object.keys(obj)
  for(let item of keys) {
    defineReactive(obj, item, obj[item])
  }
  return obj
}

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log(key + '属性被读取了！')
      return val
    },
    set(newVal) {
      if(newVal !== val) {
        console.log(key + '属性被改变了！')
        return newVal
      } else {
        return val
      }
    }
  })
}

observer(person)
let a = person.age
person.age = 15