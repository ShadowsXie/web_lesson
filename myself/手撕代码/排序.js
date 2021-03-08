// function quickSort(arr) {
//   if(arr.length <= 1) {
//     return arr
//   }
//   let flag = arr[0]
//   let arr1 = [], arr2 = []
//   for (let i = 1; i < arr.length; i ++) {
//     if (arr[i] < flag) {
//       arr1.push(arr[i])
//     } else {
//       arr2.push(arr[i])
//     }
//   }
//   return [...quickSort(arr1), flag, ...quickSort(arr2)]
// }

// console.log(quickSort([5, 2, 1, 3, 6, 6, 8, 7, 4, 5, 8, 7]));


