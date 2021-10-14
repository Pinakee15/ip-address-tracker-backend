// THIS FILE WILL CONTAIN ALL THE CRUD FUNCTIONS FOR MONGODB

const { drivers } = require("../db-drivers/drivers")

// import the mongoclient
const client = drivers.mongoClient

// POST
const insertOneData = (dbName , collectionName , data)=>{
    return client.db(dbName).collection(collectionName).insertOne(data)
}

// POST AS WELL AS UPDAT(THE IP DETAILS ARRAY)
const updateOneDocument = (dbName , collectionName ,data , id)=>{

    return client.db(dbName).collection(collectionName).updateOne(
        {_id : id},
        {$push : {"data" : data}},
        {upsert : true}
    )
}

// FIND THE IP DETAILS OF A SPECIFIC USER WITH USER ID
const findIpDetail = (dbName , collectionName , id)=>{
    return client.db(dbName).collection(collectionName).findOne(
        {_id : id}
    )
}

module.exports.crudOperations = {
    insertOneData,
    updateOneDocument,
    findIpDetail
}