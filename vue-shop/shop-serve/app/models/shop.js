const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ShopSchema = new Schema({
  publisher: {
    type: String,
  },
  shopImg: {
    type: Array
  },
  publisherName: {
    type: String
  },
  schoolId: {
    type: String
  },
  school: {
    type: String
  },
  telephone: {
    type: String
  },
  QQ: {
    type: String
  },
  remark: {
    type: String
  },
  shopPrice: {
    type: Number
  },
  tradingPlace: {
    type: String
  },
  shopName: {
    type: String
  }
}, { collection: 'shop', versionKey: false});

module.exports = mongoose.model('shop', ShopSchema);
