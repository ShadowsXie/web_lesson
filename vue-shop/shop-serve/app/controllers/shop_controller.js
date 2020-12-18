const Shop_col = require('../models/shop')


// 取商品
const getShops = async(ctx, next) => {
  let req = ctx.request.body

  const shops = await Shop_col.find() 
    console.log(shops);
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

// 发布商品
const publishShop = async(ctx, next) => {
  let req = ctx.request.body
  console.log(req);
  const result = await Shop_col.create(req);
  console.log(result);
  if (result) {
    ctx.body = {
      code: 1,
      msg: '发布成功！'
    }
  } else {
    ctx.body = {
      code: 0,
      msg: '发布失败！'
    }
  }
}

// 上传图片文件
// const uploadFile = async(ctx, next) => {
//   let storage = multer.diskStorage({
//     //文件保存路径
//     destination: function(req, file, cb) {
//         cb(null, '../../public/uploads/')
//     },
//     //修改文件名称
//     filename: function(req, file, cb) {
//         var fileFormat = (file.originalname).split(".");
//         cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
//     }
//   })
//   //加载配置
//   let upload = multer({
//     storage: storage
//   });
//   ctx.body = {
//     code: 1,
//     msg: '成功',
//     filename
//   }
// }

module.exports = {
  getShops,
  publishShop,
}