const express = require("express")

const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const deleteRouter = express.Router();
const MemoriaVault = require("../Model/MemoriaVault.model")

getRouter.use(express.json());
postRouter.use(express.json());
putRouter.use(express.json());
deleteRouter.use(express.json());

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
        const user = await MemoriaVault.findById(userId);
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


postRouter.post('/adduser', async (req, res) => {
    try {
        const { ID, Name, Password, ImageURLl, VideoURL, DocumentURL } = req.body;
        const newUser = await MemoriaVault.create({ ID, Name, Password, ImageURLl, VideoURL, DocumentURL });
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});


putRouter.patch('/updateuser/:ID', async (req, res) => {
    try {
        const userId = req.params.ID;
        const updateFields = req.body;

        const existingUser = await MemoriaVault.findOne({ID: userId });

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updatedUser = await MemoriaVault.findOneAndUpdate(
            { ID: userId },
            { $set: updateFields },
            { new: true }
        );

        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});



deleteRouter.delete('/deleteuser/:ID', async (req, res) => {
    try {
        const userId = req.params.ID;
        const deletedUser = await MemoriaVault.findOneAndDelete({userId});
        res.status(200).json("deleted user");
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

module.exports = {getRouter, postRouter, deleteRouter, putRouter};
