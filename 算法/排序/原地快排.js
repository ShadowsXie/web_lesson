// 0 -1 8 6 4
// partition 分区 小于基准值的数 基准值 大于基准值的数
  function quickSort(arr, i, j)  {
    if (i >= j) return;
    let left = i, right = j;
    let privt = arr[left];
    while(left < right) {
      while(arr[right] >= privt && left < right) {
        right --;
      }
      arr[left] = arr[right];
      while(arr[left] <= privt && left < right) {
        left ++;
      }
      arr[right] = arr[left];
    }
    arr[left] = privt;
    // left 基准位置
    // 5 4 6 8 -1 -2 4
    // [5] 4 4 -2 -1 5 8 6
    // 4 4 -2 -1 
    quickSort(arr, i, left - 1);
    quickSort(arr, left + 1, j);
    return arr
  }
  let arr = [5, 4, 6, 8, -1, -2, 4]
  console.log(quickSort(arr, 0, arr.length - 1))




  // 分区
  function partition(arr, i, j) {
    if (i >= j) return;
    let left = i, right = j;
    let privt = arr[left];
    while(left < right) {
      while(arr[right] >= privt && left < right) {
        right --;
      }
      arr[left] = arr[right];
      while(arr[left] <= privt && left < right) {
        left ++;
      }
      arr[right] = arr[left];
    }
    arr[left] = privt;
    return left
  }