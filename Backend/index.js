require("dotenv").config()
const express = require("express");
const mongoData = require("./config/dataconnection")
const Authrouter = require('./routes/authRouter')
const cors = require("cors");
const cookieparser = require('cookie-parser')
const app = express();
mongoData()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieparser())
const allowedorigins = [
    "https://medicos-frontend.vercel.app",
    "https://medicos-silk.vercel.app"
]
const corsoptions={
    origin:(origin,callback)=>{
        if(allowedorigins.indexOf(origin)!==-1||!origin){
            callback(null,true)
        }else{
            callback(new Error('not allowed'))
        }
    },
    credentials:true,
    optionsSuccessStatus:200
}
app.use(cors(corsoptions))
app.use(express.urlencoded({ extended: false }))
app.use('/Medico', Authrouter)

app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(PORT, () => console.log(`Localhost running at ${PORT}`))