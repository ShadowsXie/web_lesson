function bigNumberSum(num1, num2) {
  let n1 = ('0' + num1).split('')
  let n2 = ('0' + num2).split('')
  console.log(n1, n2);
  let length = Math.max(n1.length, n2.length)
  let res = []
  let arr = 0
  let distance = n1.length - n2.length
  if (distance > 0) {
    for (let i = 0; i < distance; i ++) {
      n2.unshift('0')
      console.log('-----------');
    }
  } else if (distance < 0) {
    for (let i = 0; i > distance; i --) {
      n1.unshift('0')
    }
  }
  for (let i = length - 1; i >= 0; i -- ) {
    let sum = Number(n1[i]) + Number(n2[i]) + arr
    if (sum >= 10) {
      arr = 1
      res.unshift(sum % 10)
    } else {
      arr = 0
      res.unshift(sum)
    }
  }
  res.shift()
  return res.join('')
} 

console.log(bigNumberSum('1','9'));