const {Router} = require("express");
const { UserModel } = require("../models/User.model");



const userController = Router();


userController.get("/user", async(req,res) => {
    const useData = await UserModel.find()
    // res.json({massage:"Get Data"})
    res.send(useData)
})

userController.post("/user", async(req,res) => {
    const userdataf  = req.body;

    const data = new UserModel({userdataf})

    try{
        await data.save();
        res.status(201).json(data);
    }
    catch(err){
         console.log("Somthing went wrong")
    }
    res.send(data)
})

userController.delete("/delete", async(req,res) => {

    const deletedata = await UserModel.deleteMany();

    if(deletedata){
        res.json({massage:"Deleted all data"})
    }else{
        res.json({massage:"Somthing went wrong while deleting!"})
    }
   

})
module.exports = {
    userController
}