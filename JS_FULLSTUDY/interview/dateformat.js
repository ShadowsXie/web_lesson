// dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
// dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
// dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日
// 写一个日期格式化函数
// const dateFormat = (dateInput, format)=>{
//   // todo
// }

const dateFormat = (dateInput, format) => {
  return format.replace('yyyy', dateInput.getFullyear())
  .replace('MM', dateInput.getFullMonth() + 1)
  .replace('dd', dateInput.getFullDate())
}