const express = require('express');
const router = express.Router();

router.get('/mov', (req, res)=>{
     res.render('crypto_mov_page');
});


module.exports = router;