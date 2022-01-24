const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Crypto = require('../database/CryptoSchema');

router.get('/mov', (req, res)=>{
     res.render('crypto_mov_page');
});

router.post('/new', function (req, res) {
     
     var crypto = new Crypto({
          CryptoName:req.body.nameCrypto,
          dateOperation:req.body.dateOperationCrypto,
          buyOperation:req.body.typeOperationBuyCrypto,
          saleOperation:req.body.typeOperationSaleCrypto,
          quanty: req.body.quantyOperationCrypto,
          value:req.body.valueOperationCrypto,
     });

     crypto.save((err)=>{
          if (err) {
               console.log(err);
          } else {
               res.redirect('/');
          }
     });

});

module.exports = router;