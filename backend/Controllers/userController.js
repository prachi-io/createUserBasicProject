const User = require("../models/userModel");
exports.home = (req,res) => {
    res.send("Hello  !!")
}

exports.createUser = async (req,res) => {
    try {
        console.log(req.body)
        const {name , email} = req.body;
        console.log(name , email)
        if(!name || !email) {
            throw new Error("plz name email daalo")
        }
        const userExists = await User.findOne({email})
        if(userExists) {
            throw new Error("already ho ")
        }
        const user = await User.create({name,email})
        console.log(user)

        res.status(200).json({
            success:true,
            message:"User created",
            user
        })
    } catch(error) {
        console.log(error.message)
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}

exports.getUsers = async (req,res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            success:true,
            users
        })
    } catch(err) {
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

exports.editUser = async (req,res) => {
    try {
        console.log(req.body)
        console.log(req.params.id)
        const user = await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            success:true,
            user
        })
    } catch(error) {
        res.status(400).json({
            success:false,
        })
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message: "User Deleted Successfully",
            user
        })
    } catch(error) {
        res.status(400).json({
            success:false,
            message: error.message,
        })
    }
}


