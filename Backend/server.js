require("dotenv").config()
const express = require("express");
const Authrouter = require('./routes/authRouter')
const app = express();
const PORT = process.env.PORT||3000;

app.use(express.json());

app.use('/Medico', Authrouter)
app.get('/',(req,res)=>{
    res.send("hi")
})

app.listen(PORT,()=>console.log(`Localhost ${PORT}`))