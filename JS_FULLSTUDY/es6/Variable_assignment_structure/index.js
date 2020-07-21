// let a = 1
// let b = 2
// let c = 3

//数组的解构
// let [a, b, c] = [1, 2, 3]

// let [foo, [[bar], baz]] = [1,[[2], 3]]


// let [, , third] = ['a', 'b', 'c']

// let[x, y] = [1, 2, 3]

// let[head, ...tail] = [1, 2, 3, 4]

// let[a, b, ...c] = ['hello'] //拥有解构符的值没有被赋值的结果是一个空数组

// let[foo, bar] = [1]

// let [foo] = 1 //报错
// let [foo] = {}
// console.log(foo)



// let [foo = true] = [] //若解构值为空，则变量使用默认值即true
// let [x, y='aaa'] = ['a', undefined] //undefined 解构出来默认赋值是不成功的
// let [x, y='aaa'] = ['a', null]

// let [x=1, y=x] = [2, 3]
// console.log(x,y)

//对象的解构

// let {foo, bar} = { foo: 'aaa', bar: 'bbb'}

// let obj ={
//     name = 'ab',
//     age = 18
// }
// let {name, age} = obj

// let{foo: baz} = {foo: 'aaa', bar: 'bbb'}
// //foo 是匹配模式，baz才是变量
// console.log(baz)

// let obj = {
//     name: 'zichen',
//     desc: {
//         alone: false,
//         age: 20,
//         sanwei:[50, 100, 120]
//     }
// }

// let{name, desc:{alone, age, sanwei:[x, y, z]}} = obj //对象与数组的解构
// console.log(name, alone, age, x, y, z)


// let {x = 3} = {x: null}
// console.log(x)


//注意：
// let x
// ({x} = {x : 1}) //以及定义的变量在解构时要在外面加一个小括号，不然会报错
// console.log(x)


//字符串的解构
// let [a, b, c, d, e] = 'hello'
// console.log(a, b, c, d, e)
// let {length: len} = 'hello'
// console.log(len)

//数值和布尔值的解构赋值
// let {toString: s} = 123
// console.log(s === Number.prototype.toString)
let {toString: s} = true
console.log(s === Boolean.prototype.toString)