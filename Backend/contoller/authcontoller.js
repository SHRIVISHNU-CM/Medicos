
const signin = (req,res)=>{
    const {name,password} = req.body
    if(!name||!password){
        res.status(400).json({
            message: "Name and password are required"
        })
    }
    if(name ==="SHRIVIDYACM" && password === "hello1"){
        res.status(200).json({
            message:"user loggined"
        })
    }
    res.send("hi")
}

module.exports = {
    signin
}