class Event {
  constructor() {
    this.listener = []
  }

  on(name, cb) {
    if (this.listener[name] === undefined) {
      this.listener[name] = []
    }
    else {
      this.listener[name].push({
        cb: cb,
        once: false
      })
    }
  }

  emit(name) {
    for (let task of this.listener[name]) {
      task.cb()
      this.listener[name] = this.listener.name.filter(t => !t.once)
    }
  }

  once(name, cb) {
    if (this.listener[name] === undefined) {
      this.listener[name] = []
    }
    else {
      this.listener[name].push({
        cb: cb,
        once: true
      })
    }
  }
}