// THIS FILE WILL CONTAIN ALL THE DRIVERS WHICH MAP BE USED IN FURURE TO CONNECT TO DATABASES
const { MongoClient } = require('mongodb');

// MONGO DB DRIVER
const uri = "mongodb+srv://pinakee:pinakee@cluster0.m3iqk.mongodb.net/user-ip-infos?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.drivers = {
    mongoClient : client
}