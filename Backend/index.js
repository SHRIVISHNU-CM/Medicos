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
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  })
app.use('/Medico', Authrouter)

app.get('/',(req,res)=>{
    res.send("hi")
})

app.listen(PORT,()=>console.log(`Localhost running at ${PORT}`))