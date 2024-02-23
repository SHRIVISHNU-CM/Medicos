const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Enter name"],
        trim:true
    },
    patient_id:{
        type:Number,
        required:[true,"Enter patient-id"],
        unique: true,
    },
    history:{
        type:String,

    },
    medicine_given:{
        type:String
    },
    phoneno:{
        type:Number
    },
    location:{
        type:String
    }

},{timestamps:true})

const userModel = mongoose.model("patientHistory", userSchema)
module.exports=userModel;