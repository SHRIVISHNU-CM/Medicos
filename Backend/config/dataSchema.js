const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    patient_id:{
        type:Number,
        required:true,
        unique: true,
    },
    history:{
        type:String,

    },
    medicine_given:{
        type:String
    }
})

const userModel = mongoose.model("patientHistory", userSchema)
module.exports=userModel;