const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

const SERVER_PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/design-days';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req,res,next)=>{
    res.send("Hello world");
});

mongoose.connect(MONGO_URI,{useNewUrlParser:true})
.then(result=>{
    console.log('connected to db');
})
.catch(err=>{
    console.log(err);
});

app.listen(SERVER_PORT,()=>{console.log(`Server running on port ${SERVER_PORT}`)});