const Koa = require('koa')
const cors = require('koa2-cors') // 跨域处理
const bodyParser = require('koa-bodyparser') // 解析参数
const mongoose = require('mongoose') // 做mongoose连接
const config = require('./config')

const app = new Koa()

// 建立mongodb连接
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
  if (err) {
    console.log('Faild to connect to database');
  } else {
    console.log('Connecting database successfully');
  }
})

app.use(cors())
app.use(bodyParser())


const user_router = require('./routes/api/user_router')
const shop_router = require('./routes/api/shop_router')

app.use(user_router.routes()).use(user_router.allowedMethods())
app.use(shop_router.routes()).use(shop_router.allowedMethods())

app.listen(config.port)