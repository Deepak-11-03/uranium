const express = require('express');
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
const router = express.Router();

const route = require('./routes/route.js');

const app = express();

const multer= require("multer");
const { AppConfig } = require('aws-sdk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( multer().any())

mongoose.connect("mongodb+srv://user:ISjwDttcDksEnCcv@cluster0.hja9z.mongodb.net/group44database?authSource=admin&replicaSet=atlas-3xefdb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true" ,
 { useNewUrlParser: true})
 
.then(() => {
    console.log("MongoDb connected")
}).catch((err) => {
    console.log(err.message)
});


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
