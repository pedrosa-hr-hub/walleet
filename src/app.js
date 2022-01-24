const express = require('express')
const app = express()
const bodyParser = require("./bodyParser");

//bodyparser config
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//ejs config
app.set("view engine", "ejs");

//public config
app.use(express.static("public"));

module.exports = app;