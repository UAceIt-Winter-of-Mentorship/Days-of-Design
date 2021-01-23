const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

const server = require('http').createServer(app);

app.get('/',(req,res,next)=>{
    console.log('logging in on the home route');
    res.send("Hello world");
});


server.listen(SERVER_PORT,()=>{console.log(`Server running on port ${SERVER_PORT}`)});