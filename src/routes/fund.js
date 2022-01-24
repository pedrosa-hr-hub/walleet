const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Fund = require('../database/FundSchema');

router.get('/mov', (req, res)=>{
     res.render('fund_mov_page');
});

router.post('/new', function (req, res) {
     
     var fund = new Fund({
          fundName:req.body.nameFund,
          dateOperation:req.body.dateOperationFund,
          apllyOperation:req.body.OperationApllyFund,
          rescueOperation:req.body.OperationRescueFund,
          value:req.body.valueOperationFund,
     });

     fund.save((err)=>{
          if (err) {
               console.log(err);
          } else {
               res.redirect('/');
          }
     });

});


module.exports = router;