const mongoose = require('mongoose');
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_STRING).then(
          ()=>{
               console.log('DataBase ON!')
          }
     ).catch(
          (err)=>{
               console.log('DataBase OFF! ' + err);
          }
     )

module.exports=mongoose;