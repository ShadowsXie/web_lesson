Function.prototype.mycall = function(context) {
  if (typeof this !== 'function') {
    return 'typeError'
  }

  const fn = Symbol('fn')
  context = context || window
  let args = [...arguments].slice(1)
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}