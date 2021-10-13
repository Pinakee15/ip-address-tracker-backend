// import the dependencies
const express = require('express');
const router = express.Router();
const { USER_IPDETAILS } = require('../API_ROUTES_CONTANTS');

/// ROUTES

router.get( USER_IPDETAILS, (req,res)=>{
    console.log("This is the home page request ..");
    res.send("HOME ..").status(200);
});

router.post(USER_IPDETAILS , (req,res)=>{
    
})


module.exports =  router;