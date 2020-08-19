const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const main = ctx => {
    ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.now()}`
}

app.use(route.get('/',main))
// app.use(main)
app.listen(3000)
