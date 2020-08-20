// 其他常见的类型

// any
let notSure: any = 4
notSure = 'dasdsad'


// unKnow
let value: any;
// value = true
// value = 1
// value = 'hello'
// value = Symbol('type')
// value = {}
// value = []
value.foo.bar
value()
new value()
value[0][1]

let value2: unknown
value2 = true
value2 = 1
value = 'hello'
value = Symbol('type')
value = {}
value = []
// value2.foo.bar     //报错
// value2()           //报错
// new value2()       //报错
// value2[0][1]       //报错




// never
const empty: never[] = []
// empty.push(1)
function error(message: string): never {
    throw new Error(message)
}


// 数组
const list: number[] = [1, 2, 3]
const list1: Array<number> = [1, 2, 3]    // 泛型

// 元组
const list2: (string | number)[] = ['1', 2]


// 对象(数组和元组都是对象)
let obj: object
obj = [1]
obj = [1, '2']
obj = {}