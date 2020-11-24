const Koa = require('koa')
const KoaView = require('koa-view')
const router = require('koa-router')()
const app = new Koa()
const path = require('path')
const viewPath = path.join(__dirname, './views')
// ejs 约等于 vue template
app.use(KoaView(viewPath, {
  extension: 'ejs'
}))

router.get('/', async (ctx) => {
  await ctx.render('xss')
})
app
  .use(router.routers())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log(8080);
})
