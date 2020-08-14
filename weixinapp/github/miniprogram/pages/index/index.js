//index.js
const app = getApp()
const github = require('../../api/github.js')

Page({
  data: {
    trends: []
  },
  onSearch: function(value){
    console.log(value, '++++++++++++++++++')
  },
  onLoad: function() {
    wx.startPullDownRefresh()
  },
  onPullDownRefresh: function () {
    this.reloadData()
  },
  reloadData: function () {
    console.log(11)
    // 数据 wx.request collection.get
    // 到api模块去做
    github
      .trendings()
      .then(data => {
      console.log(data);
    })
  }
})
