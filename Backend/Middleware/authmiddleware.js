const jwt = require('jsonwebtoken');
const verifySignin = async (req, res, next) => {
    try {
        if (!req.body.name) {
            res.status(400).send({
                message: "Enter Correct username"
            })
        }
        if (!req.body.password) {
            res.status(400).json({ message: "enter verify Password" })
            console
        }
        next()
    } catch (e) {
        console.log(e)
        res.status(400).json({ message: "error in page" })
    }
}

const verifytoken = (req, res, next) => {
    const token = req.cookies.accesstoken
    if (!token) {

    res.status(400).json({
            success: false,
            messsage: "invalid credentials"
        })
    }
     else {
        jwt.verify(token,process.env.SECRET,(err,decoded)=>{
            if(err){
                res.json({
                    message:"Error"
                })
            }else{
                req.name= decoded.name;
                next()
            }
        })
    }

}
module.exports = {
    verifySignin,
    verifytoken,
}