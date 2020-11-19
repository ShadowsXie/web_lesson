module.exports = {
  index: async (ctx) => {
    ctx.body = await app.$model.user.findAll()
  },
  detail: async (ctx) => {
    ctx.body = '123'
  }
}
