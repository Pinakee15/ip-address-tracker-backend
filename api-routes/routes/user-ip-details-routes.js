// import the dependencies
const express = require('express');
const { crudOperations } = require('../../crud-operations/mongo-crud');
const router = express.Router();
const { USER_IPDETAILS } = require('../API_ROUTES_CONTANTS');

/// ROUTES

router.get(USER_IPDETAILS, (req,res)=>{
    let userId = req.params.id;
    crudOperations.findIpDetail("user-ip-infos" ,"ip-infos", userId).then(result=>{
        console.log("hit this funciton with user id : ", userId , result);
        if(result){
            res.json(result).status(200);
        }
        else if(result === null){
            res.json({success : false, message : "user has not searched anything yet"}).status(404);
        }

    }).catch(err=>{
        console.log()
        res.send({success : false, message : err}).status(500)
    })

});

router.post(USER_IPDETAILS , (req,res)=>{

    let data = {ip , country , region , city , timezone , isp , coordinates } = req.body;
    let _id = req.body._id;

    crudOperations.updateOneDocument("user-ip-infos" ,"ip-infos" ,data , _id).then(result=>{
        if(result){
            res.send({success: true , message : "Posted data to the database"}).status(200);
        }
    }).catch(err=>{
        res.send({message : err}).status(500)
    })
})


module.exports =  router;