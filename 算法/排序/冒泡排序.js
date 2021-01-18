function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i ++) {
    let flag = true
    for(let j = 0; j < arr.length - i - 1; j ++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j+1]]
        flag = false
      }
    }
    if (flag) {
      break
    }
  }
  return arr
}

let a = [2, 5, 7, 9, 1, 7, -1]
console.log(bubbleSort(a));