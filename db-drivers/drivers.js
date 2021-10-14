// THIS FILE WILL CONTAIN ALL THE DRIVERS WHICH MAP BE USED IN FURURE TO CONNECT TO DATABASES
require('dotenv').config();
const { MongoClient } = require('mongodb');


// MONGO DB DRIVER
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.drivers = {
    mongoClient : client
}