// function greeter(person: string) {
//     return "hello" + person
// }
// // greeter(1)
// const user = "wn"



// // 类型
// // let isLoading: boolean = false
// // isLoading = 123

// // let num = 6
// // num = 8

// let book: string = 'typeScript'


// // 空值
// function warnUser(): void {
    
// }


// const a: void = undefined


// let aa = undefined
// let bb: undefined = undefined

// let sym1: symbol = Symbol('key1')       // Symbol类型，唯一值， sym1 !== sym2
// let sym2 = Symbol('key1')


// BigInt
const max = BigInt(Number.MAX_SAFE_INTEGER)

const max1 = max + 1n
const max2 = max + 2n

console.log(max1 === max2)