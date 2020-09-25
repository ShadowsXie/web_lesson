Function.prototype.myapply = function(context) {
  if (typeof this != 'function') {
    throw new TypeError('Apply must be called on a function')
  } 
  context = context || window
  const args = arguments[1]
  const fn = Symbol('fn')
  context[fn] = this

  const result = context[fn](...args)

  delete context[fn]
  return result
}