Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError ('Error')
  }

  const fn = Symbol('fn')
  const args = [...arguments].splice(1)
  context = context || window

  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]

  return result
}

let obj = {
  b: 1
}

var b = 2
function test(b) {
  b = b
  console.log(this.b);
}

test.myCall(obj, 3)

