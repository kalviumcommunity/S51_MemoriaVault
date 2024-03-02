const express = require("express")
const joi=require('joi')

const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const deleteRouter = express.Router();
const MemoriaVault = require("../Model/MemoriaVault.model")

getRouter.use(express.json());
postRouter.use(express.json());
putRouter.use(express.json());
deleteRouter.use(express.json());

const schema = joi.object({
    ID:joi.string().required(),
    Name:joi.string().required(),
    Password:joi.string().required(),
    ImageURL:joi.string(),
    VideoURL:joi.string(),
    DocumentURL:joi.string()
})

getRouter.get('/getallusers', async (req, res) => {
    try {
        const users = await MemoriaVault.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        return res.status(500
            ).send({
            message: "Internal server error"
        });
    }
});

getRouter.get('/getuser/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await MemoriaVault.findById({_id:userId});
        res.status(200). json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


postRouter.post('/adduser', async (req, res) => {
    const {error,value}=schema.validate(req.body,{abortEarly:false})
    try {
        if(!error){
        const { ID, Name, Password, ImageURL, VideoURL, DocumentURL } = req.body;
        const newUser = await MemoriaVault.create({ ID, Name, Password, ImageURL, VideoURL, DocumentURL });
        res.status(201).json(newUser);
    } else{
        return res.status(400).send({message: `Bad request,error:${error}`})
    }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


putRouter.patch('/updateuser/:id', async (req, res) => {
    const {error,value}=schema.validate(req.body,{abortEarly:false})
    try {
        if(!error){
        const {id} = req.params;
        const filter ={"ID":id}
        let{ID, Name, Password, ImageURL, VideoURL, DocumentURL} = req.body;
        const userDetails = await MemoriaVault.findOneAndUpdate(filter,{ID, Name, Password, ImageURL, VideoURL, DocumentURL });
        res.status(200).json(userDetails);
        }else{
            return(res.status(400).send({message: `Bad request,error:${error}`}))
        }
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
});



deleteRouter.delete('/deleteuser/:ID', async (req, res) => {
    try {
        const user = await  MemoriaVault.findOneAndDelete({ ID: req.params.ID });
        res.status(200).json("Deleted user");
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

module.exports = {getRouter, postRouter, deleteRouter, putRouter};
