// let obj = {
//     name: '明国',
//     age: 18,
//     sex: 'man'
// }
// obj.height = '175cm'   //往对象中添加属性


// const m = new Map()
// console.log(m)    //Map {}
// m.set(obj,'content')              // obj 将作为 key 值，'content'作为 value
// { { name: '明国', age: 18, sex: 'man' } : 'content' }

// m.get(obj)                        // 取值

// m.has(obj)                        // 判断是否存在

// m.delete(obj)                         // 删除数据

// console.log(m.has(obj)) 

// const map = new Map([          // map: { name: '祥祥', age: '20'}
//     ['name', '祥祥'],
//     ['age', '20']
// ])
// console.log(map.size)
// console.log(map.has('name'))
// console.log(map.get('name'))


// const items = [       
// ['name', '祥祥'],
// ['age', '20']
// ]
// const map = new Map()
// items.forEach(([key, value]) => {
//     map.set(key, value)
// })

// const set = new Set([   //{ [ 'foo', 1 ], [ 'bar', 2 ] }
//     ['foo', 1],
//     ['bar', 2]
// ])

// const m1 = new Map(set)
// console.log(m1)

// const map = new Map()   
// const k1 = ['a']
// const k2 = ['a']

// m.set(k1, 111).set(k2, 222)         //k1, k2, 值相同,在Map中也被认为是两个键
// console.log(m)

// m.set(-0,3)                            //0,-0 默认就是一个键
// m.set(+0,3)

// map.set(true,1)
// map.set('true',2)

// map.set(undefined, 3)
// map.set(null, 4)

// map.set(NaN,5)                            // NaN 默认就是一个键
// map.set(NaN,6)
// map.clear()
// console.log(map)

const map = new Map([
    ['foo', 'no'],
    ['bar', 'yes']
])
//keys() 返回键名的遍历器
//values() 返回键名的遍历器
//entries() 返回键名的遍历器

for(let key of map.keys()){
    // console.log(key)
}

for(let key of map.values()){
    // console.log(key)
}

for(let key of map.entries()){
    // console.log(key)
}

// map.forEach((e) =>{
//     console.log(e)
// })
let k = [...map.keys]
let val =[...map.values]
let m2 =[...map]
console.log(m2)