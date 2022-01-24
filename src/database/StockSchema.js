const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stock = new Schema({
     companyName:{
          type: String,
          required: true
     },
     companyTiker:{
          type: String,
          required: true
     },
     dateOperation:{
          type: Date,
          required: true,
          default: Date.now()
     },
     saleOperation:{
          type: String,
          required: false,
          default: null,
     },
     buyOperation:{
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

module.exports = mongoose.model('Stock', Stock);