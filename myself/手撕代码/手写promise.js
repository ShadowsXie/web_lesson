function  myPromise(fun) {
  let self = this
  let status = 'PENDING'
  function onResolve(valve) {
    self.status = 'RESOLVE'
    self.value = value
    self.onFuffiled && self.onFuffiled(value)
  }
  function onReject() {}
  fun(onResolve, onReject)
}

myPromise.prototype.then = function(fun) {
  if(this.status === 'RESOLVE') fun(this.value)
}

let promise = new myPromise((resolve, reject) => {
  resolve
})