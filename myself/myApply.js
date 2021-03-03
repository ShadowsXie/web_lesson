Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  const fn = Symbol('fn')
  context = context || window
  context[fn] = this
  let args = arguments[1]
  let result = context[fn](...args)

  delete context[fn]
  return result
}