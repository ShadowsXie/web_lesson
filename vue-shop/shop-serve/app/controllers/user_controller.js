const User_col = require('../models/user')
const Password_col = require('../models/password')
const passport = require('../utils/passport')
const uuidv1 = require('uuid').v1
const config = require('../../config.js')

// 登录
const login = async (ctx, next) => {
  const req = ctx.request.body
  console.log(req);
  // 获取用户userID
  const user = await User_col.findOne({
    accountNum: req.accountNum
  }, {
    __v: 0,
    _id: 0
  })
  if (!user) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: '用户名或密码错误'
    }
    return
  }

  const userId = user.userId
  // 获取数据库中的hash
  const pass = await Password_col.findOne({
    userId
  }, {
    hash: 1
  })
  const match = await passport.validate(req.password, pass.hash)
  if (match) {
    ctx.body = {
      code: 1,
      msg: '登录成功',
      data: user
    }
    return
  }
  ctx.body = {
    code: 0,
    msg: '密码错误'
  }
}

// 注册
const register = async (ctx, next) => {
  // 先判断当前账号是否可注册
  const req = ctx.request.body

  const user = await User_col.findOne({
    accountNum: req.accountNum
  }, {
    __v: 0,
    _id: 0
  })
  ctx.status = 200
  if (user) {
    ctx.body = {
      code: 0,
      msg: 'user has been register'
    }
    return
  }
  // 插入用户
  const userId = uuidv1()
  const newUser = await User_col.create({
    userId,
    accountNum: req.accountNum, 
    school: req.school
  })
  if (newUser) {
    // 加密
    const hash = await passport.encrypt(req.password, config.saltTimes)
    const password = await Password_col.create({
      userId,
      hash
    })
    if(password) {
      ctx.body = {
        code: 1,
        msg: '注册成功',
        data: {
          userId: newUser.userId,
          accountNum: newUser.accountNum,
          school: newUser.school
        }
      }
    }
  } else {
    ctx.body = {
      code: 0,
      msg: '注册失败'
    }
  }
}

module.exports = {
  login,
  register
}