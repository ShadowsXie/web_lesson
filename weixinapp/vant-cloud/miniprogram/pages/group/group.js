// miniprogram/pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // group:[]
    groupList: []
  },

  // getGroup() {
  //   const that = this
  //   wx.cloud.callFunction({
  //     name: 'getGroup',
  //     success(res){
  //       console.log(res.result.data)
  //       that.setData({
  //         group:res.result.data
  //       })
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.getGroup()
    const self = this
    wx.cloud.callFunction({
      name: 'getGroup',
      data: {},
      success(res) {
        console.log(res)
        self.setData({
          groupList: res.result
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})