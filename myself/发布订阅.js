class Event {
  constructor() {
    this.listener = {}
  }

  emit(name) {
    for (let event of this.listener[name]) {
      event()
    }
  }

  on(name, fn) {
    if(!this.listener[name]) {
      this.listener[name] = []
    }
    this.listener[name].push(fn)
  }
}