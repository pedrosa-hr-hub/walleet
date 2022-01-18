const mongoose = require('mongoose');
require("dotenv").config();

const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${db_host}/${db_name}'`).then(
          ()=>{
               console.log('DataBase ON!')
          }
     ).catch(
          (err)=>{
               console.log('DataBase OFF! ' + err);
          }
     )

module.exports=mongoose;