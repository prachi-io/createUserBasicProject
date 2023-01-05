const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        require : [true,"Name is required"],
        trim : true,
        maxLength : [25,"name should be of less than 25 char"]
    },
    email : {
        type:String,
        require : [true,"email is required"],
        unique:true
    }
})

module.exports = mongoose.model("User",userSchema)
