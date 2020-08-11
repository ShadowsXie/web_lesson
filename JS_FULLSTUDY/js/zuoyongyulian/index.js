// function test() {

// }

// 函数也是对象，也能拥有属性
// test.name test.prototype
// test[[scope]] （隐式属性，不能被拿出来用）

// test()  ---> AO: {}  // AO对象在此行结束后被垃圾回收
// test()  ---> AO: {}

// var obj = {

// }
// 没有属性 obj.[[scope]] 一个对象默认是没有作用域



// GO: {
//     glob: undefined 100
//     a: function a() {...}
// }

// aAO: {
//     a: undefined 111
//     b: function b() {...}
// }

// bAO: {
//     b: undefined 222
// }
function a() {
    function b() {
        var b = 222
    }
    var a = 111
    b()
    console.log(a)
}
var glob = 100
a()


// a 定义 a.[[scope]]  ---> 0: GO:{}
// a 执行 a.[[scope]]  ---> 0: aAO:{}   1: GO:{}
// b 定义 a.[[scope]]  ---> 0: aAO:{}   1: GO:{}
// b 执行 a.[[scope]]  ---> 0: bAO:{}   1: aAO:{}   2: GO:{}

// b 执行完了，b的AO就要销毁

// 紧接着a也说，我也执行完了，我的AO也要销毁，因为a的AO包含了b函数，当a的AO被销毁是b函数直接失效




function a() {

    function b() {

        function c() {

        }
        c()
    }
    b()
}
a()