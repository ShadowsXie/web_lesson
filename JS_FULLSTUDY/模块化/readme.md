commonjs与es6模块化直接的差别

commonjs导出是值的拷贝, es6模块化是导出的值的引用
commonjs加载是运行时加载,而 es6模块化是编译时加载会比commonjs更加高效

commonjs:
  module.exports/require

es6:
  export{}/import {} from
  export default/import ... from

AMD规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。这里介绍用require.js实现AMD规范的模块化：用require.config()指定引用路径等，用define()定义模块，用require()加载模块

CMD是另一种js模块化方案，它与AMD很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。此规范其实是在sea.js推广过程中产生的