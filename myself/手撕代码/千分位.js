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
  let num = n + ''
  return num.split('').reverse().reduce((current, arr, index) => {
    console.log(current);
    return ((index % 3) ? arr : (arr + ',')) + current
  })
}

console.log(format(1234679414646));