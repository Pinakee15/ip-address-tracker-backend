/// Import dependencies

const express = require('express');
const mongoose = require('mongoose');


// Intialise the express instance 
const app = express();

app.listen(4000 , (req , res)=>{
    console.log("Server started at port 4000 ");    
})
