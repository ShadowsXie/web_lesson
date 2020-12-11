let a = [1, 2, 3, 4, 2, 2, 2, 2, 3]
a.sort((a, b) => a - b)
console.log(a.length/2);
console.log(a[Math.floor(a.length/2)]);