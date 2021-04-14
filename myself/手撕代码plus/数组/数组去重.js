let arr = [1, 1, 2, 3, 4, 4]

let res = [...new Set(arr)]


function arrUnique(arr) {
  let res = []
  for(let i of arr) {
    if(res.indexOf(i) < 0) {
      res.push(i)
    }
  }
  return res
}

console.log(res);
console.log(arrUnique(arr));