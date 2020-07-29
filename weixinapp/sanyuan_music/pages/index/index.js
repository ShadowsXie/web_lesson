//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList: [],
    recommendList:[],
    isRecommedListLoading: true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      url:'http://47.98.159.95/m-api/banner',
      success: (res) => {
        this.setData({
          recommendList: res.data.banners,
        })
      }
    })
    wx.request({
      url:'http://47.98.159.95/m-api/personalized',
      success: (res) => {
        this.setData({
          bannerList: res.data.banners,
          isRecommedListLoading: true
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
