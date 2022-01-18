const express = require('express');
const router = express.Router();

router.get('/mov', (req, res)=>{
     res.render('stock_mov_page');
});

router.post('/new', function (req, res) {
     console.log(req.body.nameStock)
})


module.exports = router;