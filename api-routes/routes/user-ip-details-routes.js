// import the dependencies
const express = require('express');
const { crudOperations } = require('../../crud-operations/mongo-crud');
const IpSchema = require('../../models/user-ip-details.model');
const router = express.Router();
const { USER_IPDETAILS } = require('../API_ROUTES_CONTANTS');

/// ROUTES

router.get( USER_IPDETAILS, (req,res)=>{
    console.log("This is the home page request ..");
    res.send("HOME ..").status(200);
});

router.post(USER_IPDETAILS , (req,res)=>{

    let data = {ip , country , region , city , timezone , isp , coordinates , _id} = req.body;
    console.log("request from server : ", data);
    // let object = {
    //     _id : 
    // }

    //crudOperations.updateOneDocument("user-ip-infos" ,"ip-infos" ,data , id);

    //crudOperations.findIpDetail("user-ip-infos" ,"ip-infos" , id)

    // crudOperations.insertOneData("user-ip-infos" ,"ip-infos" ,data)
    //     .then(result=>{            
    //         console.log("INSERTED DATA SUCCESSFULLY INTO DATABASE", result);
    //         res.send("success").status(200);
    //     }).catch(err=>{
    //         console.log("error while inserting : ", err);
    //         res.send({message : "something went wrong while insering data"})
    //     })

})


module.exports =  router;