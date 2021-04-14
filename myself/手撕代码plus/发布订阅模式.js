class listenEmitter {
  constructor() {
    this.coach = {}
  }

  on(name, fn) {
    if(this.coach[name]) {
      this.coach[name].push(fn)
    } else {
      this.coach[name] = [fn]
    }
  }

  emit(name, once, ...args) {
    if(this.coach[name]) {
      let tasks = this.coach[name]
      for(let fn of tasks) {
        fn(...args)
      }
      if(once) {
        delete this.coach[name]
      }
    } 
  }
}

let eventBus = new listenEmitter()
let bus1 = function() {
  console.log('我是bus1');
}
let bus2 = function(name) {
  console.log(`我是bus2${name}`);
}

eventBus.on('创建bus', bus1)
eventBus.on('创建bus', bus2)
eventBus.emit('创建bus', false, '呆瓜')