/// Import dependencies

const express = require('express');
const cors = require("cors");
const userIpDetailsRoutes = require("./api-routes/routes/user-ip-details-routes");
const { drivers } = require('./db-drivers/drivers');

// Intialise the express instance 
const app = express();


// CONNECT TO MONGODB DATABASE

const connetToMongoDB = async ()=>{

    let client = drivers.mongoClient;

    try{
        await client.connect();    
        client.once('open' , ()=>{
            console.log("DATA BASE CONNECTED : "); 
        });
        await listDataBases(client);                
    }
    catch(e){
        console.log("ERROR WHILE CONNECTING TO MONGODB : ", e );
    }
} 
 
const listDataBases = async (client)=>{
    const databasesList =  await client.db().admin().listDatabases()
    console.log("DATABASES LISTS : ")
    databasesList.databases.forEach(db=>{
        console.log("- db" , db.name);
    })
}

connetToMongoDB().catch(console.log);


/// ADDING THE MIDDLE WARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({ origin: '*' }));
app.use("/api" , userIpDetailsRoutes);


// LISTEN TO THE REQUESTS

app.listen(4000 , (req , res)=>{
    console.log("Server started at port 4000 ");    
});
