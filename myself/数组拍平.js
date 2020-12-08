let a = [1, [2, 5, 6], [4, 1, 6, [1, 3]]]

let b = a.flat(Infinity)


function myFlat(arr) {
  let stack = [...arr], res = []
  while(stack.length) {
    let item = stack.pop()
    if (Array.isArray(item)) {
      stack.push(...item)
    } else {
      res.unshift(item)
    }
  }
  return res
}

console.log(myFlat(a));
