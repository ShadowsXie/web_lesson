// 实现Storage，使得该对象为单例，基于localStorage进行封装，
// 实现方法setItem(key, value)和getItem(key)

// class Storage {
//   static getInstance() {
//     if(!Storage.instance) {
//       Storage.instance = new Storage()
//     }
//     return Storage.instance
//   }
//   setItem(key, value) {
//     return localStorage.setItem(key, value)
//   }
//   getItem(key) {
//     return localStorage.getItem(key)
//   }
// }

function StorageBase() {}
StorageBase.prototype.getItem = function(key) {
  return localStorage.getItem(key)
}
StorageBase.prototype.getItem = function(key) {
  return localStorage.getItem(key, value)
}
const Storage = (function() {
  let instance = null
  return function() {
    if (!instance) {
      instance = new StorageBase()
    }
    return instance
  }
})()


const strotage1 = Storage().getInstance // new Storage
const strotage2 = Storage().getInstance

strotage1.setItem('name', '蜗牛')
strotage2.setItem('name', '皮皮')

strotage1.getItem('name') // 蜗牛