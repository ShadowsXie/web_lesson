function flat(arr) {
  let stack = [...arr], res = []
  while (stack.length) {
    let item = stack.pop()
    if(Array.isArray(item)) {
      stack.push(...item)
    } else {
      res.unshift(item)
    }
  }
  return res
}

let arr = [1, [2, 3, [4, 5], 6, [7, 8], 9], [10, 11], [12, 13], 14]
console.log(flat(arr));
console.log(arr.flat(Infinity));