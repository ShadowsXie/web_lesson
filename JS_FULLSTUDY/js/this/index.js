// function identify(context) {
//   return context.toUpperCase()
// }

// function speak(context) {
//   let greeting = "Hello, I'm" + identify(context)
//   console.log(greeting)
// }

// speak('wn')




// function identify() {
//     return this.name.toUpperCase()   //me
//   }
  
//   function speak() {
//     let greeting = "Hello, I'm" + identify.call(this)
//     console.log(greeting)
//   }

//   let me = {
//       name: 'wn'
//   }

//   let you = {
//       name: 'abc'
//   }
  
//   speak.call(me)



// this所处的词法作用域在哪里生效了，this作用域就指向哪里

// function foo() {
//     let person = {
//         name: 'wn',
//         age: 18
//     }
//     console.log(this.person.age)
// }

// function bar () {
//     let person = {
//         name: '蜗牛',
//         age: 20    
//     }
//     foo()
// }
// bar()



// function foo() {
//     // 'use strict'
//     console.log(this.a)
// }
// var a = 2;
// // window: {
// //     a: 2
// // }
// (function() {
//     "use strict"
//     foo()  // 严格模式下的foo的调用，与位置无关
// })()
// foo() 



// function foo() {
//     console.log(this.a)  // obj.a 
// }
// var obj2 = {
//     a: 3,
//     foo: foo
// }

// var obj1 = {
//     a: 2,
//     obj2: obj2
// }
// obj1.obj2.foo()   // foo此刻被obj所拥有/包含



// function foo() {
//     console.log(this.a)
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// var bar = obj.foo;
// var a = 'hello'
// bar()



// function foo() {
//     console.log(this.a)
// }
// function doFoo(fn) {   // 参数传递其实又称之为隐式赋值
//     fn()
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// // var bar = obj.foo;
// var a = 'hello'
// doFoo(obj.foo)



function foo() {
    console.log(this.a)
}
var obj = {
    a: 2,
    foo: foo
}
var bar = obj.foo()
console.log(bar)