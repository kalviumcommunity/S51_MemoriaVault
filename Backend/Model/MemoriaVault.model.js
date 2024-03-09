const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDetails=new Schema({
    ID:{type:String},
    Name:{type:String},
    Password:{type:String},
    ImageURL:{type:String},
    VideoURL:{type:String},
    DocumentURL:{type:String},
    CreatedBy:{type:String}
},{
    timestamps: true  
  });

const Model = mongoose.model("MemoriaVault",userDetails)

module.exports=Model