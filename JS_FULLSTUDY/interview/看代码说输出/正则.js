var regex = /a/g;
// lastIndex: 上一次匹配的位置
console.log(regex.test('abcabc'), regex.lastIndex);  // true
console.log(regex.test('abcabc'), regex.lastIndex);  // true
console.log(regex.test('abcabc'), regex.lastIndex);  // false
console.log(regex.test('abcabc'), regex.lastIndex);  // true
