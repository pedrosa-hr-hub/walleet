const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Crypto = new Schema({
     CryptoName:{
          type: String,
          required: true
     },
     dateOperation:{
          type: Date,
          required: true,
     },
     buyOperation:{
          type: String,
          required: false,
          default: null,
     },
     saleOperation:{
          type: String,
          required: false,
          default: null
     },     
     quanty:{
          type: Number,
          required: true,
     },
     value:{
          type: mongoose.Types.Decimal128,
          required: true
     }
})

module.exports = mongoose.model('Crypto', Crypto);