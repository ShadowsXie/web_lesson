const Vue = require('vue')
const express = require('express')
const server = express()
const Render = require('vue-server-renderer')
const fs = require('fs')
const render = Render.createRenderer({
  template: fs.readFileSync('./src/index.template.html', 'utf8')
})
// export default
// koa-static
server.use(express.static('dist')) // 把dist 目录下面的东西 通过路径名能够访问到他们 
const createApp = require('./dist/server.bundle.js').default
// createApp 指向 entry-server 那个函数，被webpack打包成 commonJS
server.get('*', (req, res) => {
  const app = createApp()
  let context = {}
  render.renderToString(app, context, (err, html) => {
    if (err) {
      console.log(err);
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // 渲染出去的页面 只是 HTML
    // 如果要有事件 必须 addEventListener绑定， node端并没有这样的 api
    // 事件必须 由浏览器绑定
    res.end(html)
  })
})
server.listen(8080, () => {
  console.log('server is running 8080');
})