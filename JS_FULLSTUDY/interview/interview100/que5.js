// 判断是否是数组的方法：1. Object.prototype.toString.call()    2. instanceof    3. Array.isArray
// 区别和优缺点


// 1. instanceof 只能判断对象类型，但是所有的对象类型instanceof Object都是true
// [] instanceof Object  // true

// 2. Object.prototype.toString.call()

// 3. Array.isArray() 在检测Array实例时，比instanceof 更优，因为Array.isArray能检测iframes