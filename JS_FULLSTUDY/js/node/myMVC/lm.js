const Koa = require('koa')

const { initRouter, initController, initService, loadConfig } = require('./lm-loader')

class lm {
  constructor(conf) {
    this.$app = new Koa(conf)
    // 加载配置项
    loadConfig(this)
    this.$ctrl = initController(this)
    this.$router = initRouter(this)
    this.$service = initService()
    this.$app.use(this.$router.routes())
  }

  start(port) {
    this.$app.listen(port, () => {
      console.log('lm服务器启动成功 端口为：' + port);
    })
  }
}

module.exports = lm