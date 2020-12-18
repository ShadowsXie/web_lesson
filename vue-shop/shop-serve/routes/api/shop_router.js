const Router = require('koa-router');
const router = new Router();
const shop_controller = require('./../../app/controllers/shop_controller');
const multer = require('@koa/multer');

router.post('/shop', shop_controller.getShops)
router.post('/publish', shop_controller.publishShop)
var storage = multer.diskStorage({
  //文件保存路径
  destination: function(req, file, cb) {
      cb(null, '../../public/uploads/')
  },
  // //修改文件名称
  // filename: function(req, file, cb) {
  //     var fileFormat = (file.originalname).split(".");
  //     cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  // }
})
//加载配置
var upload = multer({
  storage: storage
});
router.post('/uploadFile', upload.single('file'), async(ctx, next) => {

  const file = ctx.request.body.file
  console.log(file);
  // file.url = `http://localhost:3000/public/uploads/${file.filename}`
  ctx.body = {
    // filename: ctx.req.file.filename //返回文件名
    file
  }
})

module.exports = router