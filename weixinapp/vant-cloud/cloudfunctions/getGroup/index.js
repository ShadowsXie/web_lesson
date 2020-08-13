// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'xshadows-8733'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('group').get()
}