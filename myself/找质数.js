function findNums(n) {
  let res = []
  for(let i = 1; i <= n; i ++) {
    if (isTarget(i)) {
      res.push(i)
    }
  }
  function isTarget(num) {
    for(let j = 2; j <= num/2; j ++) {
      if(num % j === 0) {
        return false
      } 
    }
    return true
  }
  return res
}

console.log(findNums(20));