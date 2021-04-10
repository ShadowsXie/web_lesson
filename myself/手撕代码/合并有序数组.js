function concatArr(arr1, arr2) {
  let res = [], i = 0, j = 0
  while(arr1.length > i || arr2.length > j) {
    if(arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i ++
    } else {
      res.push(arr2[j])
      j ++
    }
  }
  return res
}