require("dotenv").config()
const express = require("express");
const mongoData = require("./config/dataconnection")
const Authrouter = require('./routes/authRouter')
const cors = require("cors");
const cookieparser = require('cookie-parser')
const app = express();
mongoData()
const PORT = process.env.PORT||3000;

app.use(express.json());
app.use(cookieparser())
app.use(cors(
    {
        // origin:['https://medicos-989d.vercel.app/'],
        credentials:true
    }
))
app.use(express.urlencoded({extended:false}))

app.use('/Medico', Authrouter)
app.get('/',(req,res)=>{
    res.send("hi")
})

app.listen(PORT,()=>console.log(`Localhost running at ${PORT}`))