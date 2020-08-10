// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a: 2
// }

// foo.apply(obj)


// var a = {
//     user: '蜗牛',
//     fn: function(q,w) {
//         console.log(this.user)
//         console.log(q + w)
//     }
// }

// var b = a.fn
// b.call(a, 1, 2)


// var a = {
//     user: '蜗牛',
//     fn: function(q,w) {
//         console.log(this.user)
//         console.log(q + w)
//     }
// }

// var b = a.fn
// var arr = [100, 200]
// b.apply(a,[10,20])
// b.apply(a, arr)


var a = {
    user: '蜗牛',
    fn: function(e, d, f) {
        console.log(this.user)
        console.log(e, d, f)
    }
}
var b = a.fn
// b.bind(a)()
var c = b.bind(a, 10)    // 就近原则
c(1, 2)

