function test() {
    var arr = []
    for (var i = 0; i < 10; i++) {
    //   arr[i] = function() {
    //       console.log(i)
    //   }

        (function(j) {
            //j = 0
            arr[j] = function() {
                console.log(j)
            }
        })(i)

    }
    return arr
}
var a = test()
console.log(a[1]())