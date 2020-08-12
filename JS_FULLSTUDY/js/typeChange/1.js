//String Boolean Number Undefined Null Object

// var a = 1
// var b = new Number(1)

// 原始值转布尔
// console.log(Boolean())            //false
// console.log(Boolean(true))        //true
// console.log(Boolean(false))       //false
// console.log(Boolean(undefined))   //false
// console.log(Boolean(null))        //false
// console.log(Boolean(+0))          //false
// console.log(Boolean(-0))          //false
// console.log(Boolean(1))           //true
// console.log(Boolean(-1))          //true
// console.log(Boolean(""))          //false
// console.log(Boolean("123"))       //true
// console.log(Boolean(NaN))         //false



// // 原始值转数字
// // new number
// console.log(Number())                // 0
// console.log(Number(undefined))       // NaN
// console.log(Number(null))            // 0
// console.log(Number(false))           // 0
// console.log(Number(true))            // 1
// console.log(Number('123'))           // 123
// console.log(Number('-123'))          // -123
// console.log(Number('000123'))        // 123
// console.log(Number('0x11'))          // 17
// console.log(Number('101'))           // 101
// console.log(Number(''))              // 0

// console.log(Number('123 123'))           // NaN
// console.log(Number('wn'))             // NaN
// console.log(Number('100a'))              // NaN
// console.log(parseInt('3 abc'))        // 3
// console.log(parseInt('3.14 abc'))        // 3
// console.log(parseFloat('3.14 abc'))   // 3.14
// console.log(parseInt('-12.34'))          // -12
// console.log(parseFloat('.1'))         // 0.1
// console.log(parseFloat('1'))             // 1



// 原始值转字符串
// var a ='aaa'
// var b = new String('bbb')
// console.log(String())                  //  ''
// console.log(String(undefined))         // 'undefined'
// console.log(String(null))              // 'null'     
// console.log(String(false))             // 'false'
// console.log(String(true))              // 'true' 
// console.log(String(0))                  // '0'
// console.log(String(-0))                 // '0'
// console.log(String(NaN))                // 'NaN'
// console.log(String(1))                  // '1'



// 原始值转对象
// 原始值通过调用 String() Number() 或者 Boolean() 构造函数，转换为它们各自的包装对象
// var a = 'aaa'
// console.log(typeof(a))
// var b = new String(a)
// console.log(typeof(b))




// 对象转布尔值
// console.log(typeof Boolean(new Boolean(false)))



// 对象转字符串和数字
// toString  valueOf

// var a = {
//     b: 1
// }
// console.log(Object.prototype.toString.call(a))

var a = {
    b: 1
}
// a.toString === Object.prototype.toString.call(a)
console.log(a.toString())
console.log([].toString())
console.log([1, 2, 3].toString())
console.log([0].toString())
console.log((function(){var a = 1}).toString())
console.log(new Date().toString())

console.log(new Date().valueOf())