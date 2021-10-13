// import the dependencies

const express = require('express');
const router = express.Router();

/// ROUTES

router.get("/", (req,res)=>{
    console.log("This is the home page request ..");
    res.send("HOME ..").status(200);
})


module.exports =  router;