var combine = function(n, k) {
  let result = []
  let nums = new Array(n).fill(null)
  .map((num, i) => i + 1)
  function backtrack(tmpPath = [], start) {
    if (tmpPath.length === k) {
      result.push(tmpPath.slice(0))
      return
    }
    for (let i = start; i < nums.length; i ++) {
      let num = nums[i]
      tmpPath.push(num)
      backtrack(tmpPath, i + 1)
      tmpPath.pop(num)
    }
  }
  backtrack([], 0)
  return result
}
console.log(combine(4, 2));