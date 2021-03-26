let nums = [1, 5, 3, 4, 5, 1, 4, 11, 48, 13, 45, 78, 56, 1]

console.log([...new Set(nums)])

function diff(nums) { 
  let res = []
  for (let i = 0; i < nums.length; i ++) {
    if(res.indexOf(nums[i]) < 0) {
      res.push(nums[i])
    }
  }
  return res
}

console.log(diff(nums));