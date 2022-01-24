const express = require('express');
const router = express.Router();

var Emergency_Reserve = require('../database/Emergency_ReserveSchema');

router.get('/mov', (req, res)=>{
     res.render('emergency_reserve_mov_page');
});

router.post('/new', function (req, res) {
     
     var emergency_reserve = new Emergency_Reserve({

          reserveName:req.body.nameReserve,

          dateOperation:req.body.dateOperationReserve,

          traditionalBankReserve:req.body.typeOperationTraditionalBank,

          digitalBankReserve:req.body.typeOperationDigitalBank,

          fundReserve:req.body.typeOperationFund,

          directTreasureReserve:req.body.typeOperationDirectTreasure,

          entryOperation:req.body.typeOperationEntryReserve,
          
          exitOperation:req.body.typeOperationExitReserve,

          value:req.body.valueOperationReserve,
          
     });

     emergency_reserve.save((err)=>{
          if (err) {
               console.log(err);
          } else {
               res.redirect('/');
          }
     });

});

module.exports = router;