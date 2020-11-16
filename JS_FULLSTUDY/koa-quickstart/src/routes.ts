import Router from '@koa/router'

import AuthController from './controllers/auth'
import userController from './controllers/user'

const router = new Router()

router.post('/auth/login', AuthController.login)
router.post('/auth/register', AuthController.regitser)

export default router