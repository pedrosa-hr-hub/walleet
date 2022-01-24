const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Emergency_Reserve = new Schema({
     reserveName:{
          type: String,
          required: true
     },
     dateOperation:{
          type: Date,
          required: true,
     },
     traditionalBankReserve:{
          type: String,
          required: false,
          default: null,
     },
     digitalBankReserve:{
          type: String,
          required: false,
          default: null,
     },
     fundReserve:{
          type: String,
          required: false,
          default: null,
     },
     directTreasureReserve:{
          type: String,
          required: false,
          default: null,
     },
     entryOperation:{
          type: String,
          required: false,
          default: null,
     },
     exitOperation:{
          type: String,
          required: false,
          default: null
     },
     value:{
          type: mongoose.Types.Decimal128,
          required: true
     }
})

module.exports = mongoose.model('Emergency_Reserve', Emergency_Reserve);