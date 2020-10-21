var a = function () {
  this.b =3;
}
var c = new a();
a.prototype.b = 9;
var b = 7;
a();

console.log(b);   // 3
console.log(c.b); // 3





function B() {
  console.log(this.c);          // 先输出，此时bbbb实例本身还没有c，往上找原型链c = 2
  // this => new 完的实例
  this.c = 1
}
B.prototype.c = 2
let bbbb = new B()


// this 指向哪里 要看它在哪里调用
// 1: 默认指向window
// 2: 对象.xxx()
// 3：call/apply/bind
// 4: new 

function sum(a, b) {return a + b}
sum.apply({}, [10, 20])

let sum10 = sum.bind({}, 10) // 1. 绑定 this  2. 预先传递参数   类似柯里化
sum10(20)  // a + b  可以分几次传递参数




let obj = {
  fn: function() {
    // window
    console.log(this);
  }
}
let func = obj.fn
func()



window.data = 5;
   var foo = {
    data: 6,
    click: () => {
     console.log(this.data);
    }
   };
 
div.addEventListener('click', foo.click); // this 指向 div
div.addEventListener('click', function() {
  // this div
}); // this 指向 div

var bar = foo.click;
bar();   // this 指向 window



function C() {
  this.aa = 1
}
let ccc = {}
C.apply(ccc)