const express = require('express');
const router = express.Router();

router.get('/mov', (req, res)=>{
     res.render('fund_mov_page');
});


module.exports = router;