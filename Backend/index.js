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
app.use(cors({

    credentials:true,
    methods:["POST","PUT","DELETE","GET","PATCH","OPTIONS"]
}
   

))
app.use(express.urlencoded({ extended: false }))
app.use('/Medico', Authrouter)

app.get('/', (req, res) => {
    res.send("hi")
})

app.listen(PORT, () => console.log(`Localhost running at ${PORT}`))