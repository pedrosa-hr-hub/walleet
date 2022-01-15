const express = require('express');
const router = express.Router();

router.get('/mov', (req, res)=>{
     res.render('emergency_reserve_mov_page');
});


module.exports = router;