// sum求和函数
// let arr = [2, 4, 6, 8, 1]
// function sum(arr) {
//   if (arr.length === 1) {
//     return arr[0]
//   } else {
//     return  arr.pop() + sum(arr)
//   }
// }
// console.log(sum(arr));


// 计算数组包含的元素个数
// let arr = [1, 2, 4, 7, 6, 3, 4] 
// function nums(arr) {
//   if (arr[0] === undefined) {
//     return 0
//   } else {
//     arr.pop()
//     return nums(arr) + 1
//   }
// }
// console.log(nums(arr));


// 找最大值
let arr = [1, 1, 4, 7, 6, 3, 4] 
function maxNum(arr) {
  let maxN = -9999999999999
  function max(i) {
    if (i >= arr.length) {
      return
    } else if (arr[i] > maxN) {
      maxN = arr[i]
      max(i + 1)
    } else { 
      max(i + 1)
    }
  }
  max(0)
  return maxN
}
console.log(maxNum(arr));