// import the dependencies
const express = require('express');
const { crudOperations } = require('../../crud-operations/mongo-crud');
const router = express.Router();
const { USER_IPDETAILS } = require('../API_ROUTES_CONTANTS');

/// ROUTES

router.get(USER_IPDETAILS, (req,res)=>{
    let userId = req.params.id;
    crudOperations.findIpDetail("user-ip-infos" ,"ip-infos", userId).then(result=>{
        if(result){
            res.json(result).status(200);
        }
    }).catch(err=>{
        res.send({err})
    })

});

router.post(USER_IPDETAILS , (req,res)=>{

    let data = {ip , country , region , city , timezone , isp , coordinates } = req.body;
    let _id = req.body._id;

    crudOperations.updateOneDocument("user-ip-infos" ,"ip-infos" ,data , _id).then(result=>{
        if(result){
            res.send("success posting data to mongodb").status(200);
        }
    }).catch(err=>{
        res.send({message : err});
    })
})


module.exports =  router;