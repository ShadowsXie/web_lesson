// const obj = {a: {b : {c : {d: 3}}}}
 
// function getValue(obj, str, defaultValue) {}
 
// getValue(obj, 'a.b.c.d', 1) => 3 (存在该属性返回该属性对应的值)
 
// getValue(obj, 'a.b.c.d.e', 1) => 1 (出现错误返回传入的默认值)

function getValue(obj, str, defaultValue) {
  let paths = str.split('.')
  for (let k of paths) {
    if (obj.hasOwnProperty(k)) {
      obj = obj[k]
    } else {
      return defaultValue
    }
  }
  return obj
}