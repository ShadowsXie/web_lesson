function quickSort(num) {
  if(num.length <= 1) return num
  let flag = num[0], left = [], right = []
  for(let i = 0; i < num.length; i ++) {
    if(num[i] > flag) {
      right.push(num[i])
    } else if(num[i] < flag){
      left.push(num[i])
    }
  }
  return [...quickSort(left), flag, ...quickSort(right)]
}

console.log(quickSort([2,5,7,11,7,2,74,3,47,8,12,45,10,3,11111,123,-12,22,-1,30,-111]))