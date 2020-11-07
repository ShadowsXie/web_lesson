const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
  userid: {
    type: String,
    unique: true,
    require: true
  },
  publisher: {
    type: String,
    required: true
  },
  publisherHeader: {
    type: String
  },
  publisherName: {
    type: String
  },
  schoolId: {
    required: true,
    type: String
  },
  school: {
    type: String
  },
  phone: {
    type: String
  },
  QQ: {
    type: String
  },
  remark: {
    type: String
  },
  price: {
    type: Number
  },
  tradingPlace: {
    type: String
  },
  d: {
    type: String
  }
  
}, { collection: 'shop', versionKey: false});

module.exports = mongoose.model('shop', UserSchema);
