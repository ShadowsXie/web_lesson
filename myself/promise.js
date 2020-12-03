function Mypromise(fn) {
  let self = this
  this.state = 'pending'
  this.value = undefined
  function onResolve(value) {
    self.state = 'Fullfiled'
    self.value = value
    self.onFullfiled && self.onFullfiled(value)
  }
  function onReject() {}
  fn(onResolve, onReject)
}

Mypromise.prototype.then = function(fn) {
  if (this.state === 'Fullfiled') fn(this.value) 
  else if (this.state === 'pending') this.onFullfiled = fn
}



new Mypromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000)
  }, 1000)
})
.then(r => {
  console.log(r);
})