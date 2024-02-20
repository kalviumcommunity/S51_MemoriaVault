const express = require("express")
const app = express()

app.get("/ping",(req,res)=>{
    res.send("Hello,This is Jeeveeka")
})

app.listen(3000,()=>{
    console.log("Hi")
})