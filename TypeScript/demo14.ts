// 泛型
// function join(first: string | number, second: string | number) {
//   return `${first}${second}`
// }

// join(123, '123')


// 如何规定参数类型一致？
function join<T>(first: T, second: T) {    //声明时用泛型
  return `${first}${second}`
}

join<string>('123', '145')   // 调用时指定参数类型
join<number>(123, 456)
join<string|number>('123', 13)   //分别对应指定参数的类型


// 泛型在数组中的运用
function join2<T>(params: T[]) {
  return params
}

join2<string>(['13', '123'])   //字符数组
join2<number>([123, 4])        //数字数组