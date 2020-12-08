Function.prototype.mycall = function(context) {
  if (typeof this !== 'function') {
    return 'typeError'
  }

  const fn = Symbol('fn')
  const args = [...arguments].slice(1)
  context = context || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}