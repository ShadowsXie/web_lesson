//index.js
const app = getApp()
const db = wx.cloud.database();
// mysql  table  row fields
// mongodb(js) collection json Document 
const productsCollection = 
  db.collection('products');
Page({
  data: {
    products: []
  },
  gotoDetail(event) {
    productsCollection.doc(
      event.currentTarget.dataset.id
    ).get().then(res => {
      console.log(res)
    })
  },
  onLoad() {
    productsCollection
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          products: res.data
        })
      })
  }
})