function quickSort(arr) {
  if (arr.length <= 1) return arr
  let flag = arr[0]
  let left = [], right = []
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] > flag) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return [...quickSort(left), flag, ...quickSort(right)]
}

let arr = [10, 5, 1, 7, 100, 3, -1, 5, 8, -1]
console.log(quickSort(arr));