const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fund = new Schema({
     fundName:{
          type: String,
          required: true
     },
     dateOperation:{
          type: Date,
          required: true,
     },
     apllyOperation:{
          type: String,
          required: false,
          default: null,
     },
     rescueOperation:{
          type: String,
          required: false,
          default: null
     },
     value:{
          type: mongoose.Types.Decimal128,
          required: true
     }
})

module.exports = mongoose.model('Fund', Fund);