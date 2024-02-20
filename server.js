require("dotenv").config();
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const {connectdb,isConnected, isConnectedNow}=require('./config/dbConn.js')

app.get("/ping",(req,res)=>{
    res.send("Hello,This is Jeeveeka")
})

app.get("/home",(req,res)=>{
    res.json({
        message: isConnectedNow()? "Database is connected" : "Database is disconnected"
    })
})

app.listen(3000, async() => {
    await connectdb();
    console.log("Server is running on port 3000");
});

