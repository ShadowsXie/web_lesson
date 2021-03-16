// 枚举类型
// 初级
// function getServe(status: number) {
//   if (status === 0) {
//     return "message"
//   } else if (status === 1) {
//     return "SPA"
//   } else if (status === 2) {
//     return "dabaojian"
//   }
// }

// 中级
// let Status = {
//   msg: 0,
//   spa: 1,
//   dbj: 2
// }

// function getServe(status: number) {
//   if (status === Status.msg) {
//     return "message"
//   } else if (Status.spa) {
//     return "SPA"
//   } else if (Status.dbj) {
//     return "dabaojian"
//   }
// }


// 高级（枚举）
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN
}

function getServe(status: number) {
  if (status === Status.MASSAGE) {
    return "message"
  } else if (Status.SPA) {
    return "SPA"
  } else if (Status.DABAOJIAN) {
    return "dabaojian"
  }
}

let result = getServe(0)
console.log(result);




