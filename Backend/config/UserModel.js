const mongoose = require("mongoose")

const {Schema} = mongoose
const user_model =new Schema({
    name: {
        type: String,
        required: [true,"Enter username"],
        trim: true
    },
    password: {
        type: String,
        required:[true,"Enter password"]
    }

},{timestamps:true})
module.exports = mongoose.model('User_Model', user_model)