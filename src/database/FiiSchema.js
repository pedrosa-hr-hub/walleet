const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fii = new Schema({
     fiiTiker:{
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

module.exports = mongoose.model('Fii', Fii);