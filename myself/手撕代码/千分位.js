// 方法一
// let num = 164134613134
// console.log(num.toLocaleString());

// function formatNum(num1) {
//   let num = num1 + ''
//   let str = ''
//   for(let i = num.length - 1, j = 1; i >= 0; j ++, i --) {
//     if (j % 3 === 0 && i !== 0) {
//       str += num[i] + ','
//       continue
//     }
//     str += num[i]
//   }
//   return str.split('').reverse().join('')
// }

// console.log(formatNum(123456321346131));



function format(n) {
  let nums = n + ''
  let res = nums.split('').reverse().reduce((toa, current, index) => {
    return ((index % 3) ? current : (current + ',')) + toa 
  })
  return res
}

console.log(format(123456789));
