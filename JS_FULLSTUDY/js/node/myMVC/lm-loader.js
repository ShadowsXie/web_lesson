const fs = require('fs')
const path = require('path')

// 读取目录和文件
function load(dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url) // Array
  // 遍历
  files.forEach(filename => {
    // 去掉扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    cb(filename, file)
  })
}


// 加载路由
// app.get('/', ctx => {})
load('routes',(filename) => {
  console.log('routes:' + filename);
})