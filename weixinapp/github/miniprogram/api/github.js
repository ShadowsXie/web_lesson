const trendings = () => new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve([{
//         repo: '阿雷项目'
//     }])
//   },2000)
  // wx.request()
  resolve([{
            repo: '阿雷项目'
        }])
  const url = 'https://github-trending-api.now.sh/repositories'
  wx.request({
      url,
      success(res) {
          console.log(res)
          resolve(res);
      }
  })
})
// promise 许下一个诺言，请求数据要花时间
const getRepo = () => new Promise((resolve,reject) => {

})

module.exports = {
    trendings,
    getRepo
}