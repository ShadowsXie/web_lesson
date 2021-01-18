function quickSort(arr) {
  if (arr.length <= 1) return arr
  let arr1 = [], arr2 = []
  let p = arr[0]
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] < p) {
      arr1.push(arr[i])
    } else {
      arr2.push(arr[i])
    }
  }
  let res = [...quickSort(arr1), p, ...quickSort(arr2)]
  return res
}

console.log(quickSort([3, 4, 6, 1, 10, 8, 33, -10, 3]));