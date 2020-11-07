const Router = require('koa-router');
const router = new Router();
const shop_controller = require('./../../app/controllers/shop_controller');

router.post('/shop', shop_controller.getShops)

module.exports = router