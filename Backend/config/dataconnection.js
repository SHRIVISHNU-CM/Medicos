const mongoose = require("mongoose")

const databaseSetup = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("database connected"))
    .catch((e)=>console.log(e))
}
module.exports = databaseSetup