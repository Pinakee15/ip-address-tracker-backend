/// Import dependencies

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const userIpDetailsRoutes = require("./api-routes/user-ip-details-routes");

// Intialise the express instance 
const app = express();

/// ADDING THE MIDDLE WARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/" , userIpDetailsRoutes)

app.listen(4000 , (req , res)=>{
    console.log("Server started at port 4000 ");    
})
