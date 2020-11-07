const Shop_col = require('../models/shop')

// 取商品
const getShops = async(ctx, next) => {
  let req = ctx.request.body

  const shops = await Shop_col.find({d: '12'}) 
    if (shops) {
      ctx.status = 200
      ctx.body = {
        code: 1,
        data: shops
      }
    } else {
      ctx.status = 200;
      ctx.body = {
        code: 0,
        msg: '参数错误！'
      }
    }
}

module.exports = {
  getShops
}