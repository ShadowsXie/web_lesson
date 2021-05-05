Array.prototype.myBind = function(context) {
  if(typeof fn !== 'function') {
    console.log('Error!');
  }

  let self = this
  let args = [...arguments].slice(1)
  
  let fNop = function() {

  }

  let bound = function() {
    let boundArgs = [...arguments]
    return self.apply(this instanceof fNop ? this : context, [...args, ...boundArgs])
  }

  fNop.prototype = this.prototype
  bound.prototype = new fNop

  return bound
}