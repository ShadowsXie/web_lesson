// component/sort-bar/sort-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sortName: {
      type: Array,
      value: ['推荐', '鞋类', '服装', '手表', '箱包', '潮玩', '配饰', '数码', '运动', '家具', '美妆', '家电',]
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    idx: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sortName:function (e) {
      this.triggerEvent('myEvent',e.currentTarget.id)
      console.log(e.currentTarget.id)
      this.setData({
        idx: Number(e.currentTarget.id)
      })
    }
  }
})
