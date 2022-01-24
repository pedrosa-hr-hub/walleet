const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Stock = require('../database/StockSchema');

router.get('/mov', (req, res)=>{
     res.render('stock_mov_page');
});

router.post('/new', function (req, res) {
     
          var stock = new Stock({
               companyName:req.body.nameStock,
               companyTiker:req.body.tikerStock,
               dateOperation:req.body.dateOperationStock,
               saleOperation:req.body.typeOperationBuyStock,
               buyOperation:req.body.typeOperationSaleStock,
               quanty:req.body.quantyOperationStock,
               value:req.body.valueOperationStock,
          });

          stock.save((err)=>{
               if (err) {
                    console.log(err);
               } else {
                    res.redirect('/');
               }
          });

     });


module.exports = router;