// const app = new (require('koa'))()
// const { initRouter } = require('./lm-loader') //const router require 'koa-router'
// // app.use(router.routes())
// app.use(initRouter().routes())
// app.listen(3000)

const lm = require('./lm')
const app = new lm()

app.start(3000)