// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    starNum: 0,
    starNumH:0,
    starNumOff:0,
  },

  lifetimes:{
    attached:function() {
      let score = this.data.score
      let starNum = Math.floor(score)
      let starNumH = 0
      let starNumOff = 0
      if((score-starNum)>0){
        starNumH++
        starNumOff = 5-starNum-starNumH
      }else{
         starNumOff = 5-starNum
      }
      this.setData({
        starNum,
        starNumH,
        starNumOff
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
