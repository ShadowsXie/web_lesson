function defArr(arr) {
  let res = []
  for (let item of arr) {
    if (res.indexOf(item) < 0) {
      res.push(item)
    }
  }
  return res
}

let a = [1, 1, 1, 1, 5, 8, 8, 9, 5]
console.log(defArr(a))

let b = [...new Set(a)]
// console.log(b);

function unique(arr) {
  let obj = {}
  arr.forEach(element => {
    obj[element] = 0
  });
  return Object.keys(obj)
}

console.log(unique(a));