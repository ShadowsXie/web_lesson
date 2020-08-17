// js 是单线程的
function a() {
    console.log('蜗牛')
}

function b() {
    setTimeout(() => {
        console.log('元隆')
    }, 1000)   
}

function c() {
    console.log('蜗牛2')
}

b()
a()
c()
