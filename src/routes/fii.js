const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Fii = require('../database/FiiSchema');

router.get('/mov', (req, res)=>{
     res.render('fii_mov_page');
});

router.post('/new', function (req, res) {
     
     var fii = new Fii({
          fiiTiker:req.body.tikerFII,
          dateOperation:req.body.dateOperationFII,
          buyOperation:req.body.typeOperationBuyFII,
          saleOperation:req.body.typeOperationSaleFII,
          quanty: req.body.quantyOperationFII,
          value:req.body.valueOperationFII,
     });

     fii.save((err)=>{
          if (err) {
               console.log(err);
          } else {
               res.redirect('/');
          }
     });

});

module.exports = router;