interface Waiter {
  anjiao: boolean
  say: () => {}
}

interface Teacher {
  anjiao: boolean
  skill: () => {}
}

// function judgeWho (animal: Waiter | Teacher) {     //联合类型
//   if(animal.anjiao) {                        //类型守护：法一
//     (animal as Teacher).skill()
//   } else {
//     (animal as Waiter).say()
//   }
// }

// function judgeWhoTwo (animal: Waiter | Teacher) {     //联合类型
//   if("skill" in animal) {                 //类型守护：法二 用 in
//     animal.skill()
//   } else {
//     animal.say()
//   }
// }



// function add (first: string | number, second: string | number) {             // 用typeof类型保护
//   if (typeof first === "string" || typeof second === "string") {
//     return `${first}${second}`
//   }
//   return first + second 
// }




class NumberObject {
  count: number
}

function addObject(first: object | NumberObject, second: object | NumberObject) {   // 用instanceof类型守护
  if (first instanceof NumberObject && second instanceof NumberObject) {
    return first.count + second.count
  }
  return 0
}