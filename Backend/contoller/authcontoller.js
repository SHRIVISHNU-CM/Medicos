const users = require("../config/dataSchema")
const userModel = require("../config/UserModel")
const jwt = require('jsonwebtoken')
const signup =async (req, res) => {
    const { name, password } = req.body
    try{
        const result = await userModel.create({
            name,password
        })  
        console.log(result)
        return res.status(200).json({
            message:"Successfully signed"
        })
    }catch(e){
        console.log(e.message)
        return res.status(400).json({
            message:"Error in login"
        })
    }
    
}
const signin = async(req,res)=>{
    const {name,password} = req.body
    try{
        const result = await userModel.findOne({name:name})
        if(name !== result.name){
            return res.status(400).json({
                message:"Check Name"
            })
        }
        if(!password){
            return res.status(400).json({
                message:"Check password"
            })
        }
        const accesstoken = jwt.sign({id: result._id},process.env.SECRET,{
            expiresIn:'24h'
        })
        return res.cookie('accesstoken',accesstoken,{
            maxAge:24 * 60 * 60 * 1000,
            httpOnly:true,
            secure:true,
            sameSite:'strict'
            
        }).status(200).json(accesstoken)

    }catch(e){
        console.log(e)
        return res.status(400).json({
            messsage:"Error in sigin"
        })
    }
}
const logout = (req,res)=>{
    try{
        return res.cookie('accesstoken',null,{
            expiresIn:new Date()
        }).status(200).json({
            message:"Success logout"
        })
    }catch(e){
        console.log(e)
        return res.status(400).json({
            message:"Error in logout"
        })
    }
}
const AllDetails = async (req, res) => {
    try {
        const Details = await users.find()
        console.log(Details);

        return res.status(200).json(Details)

    } catch (e) {
        console.log(e.message)
        return res.status(400).json({ message: "Error in getting data" })
    }
}
const GetItmesById = async(req,res)=>{
    const {id} = req.params;
    try{
        const response = await users.findOne({_id:id})
        console.log(response)
        return res.status(200).json(response)

    }catch(e){
        console.log(e)
        return res.status(400).json({message:"Error in fetching data using id"})
    }

}
const GetDetailsFromData = async (req, res) => {
    const { id } = req.params;
    try {
        const GetDetails = await users.findOne({ patient_id: id })
        console.log(GetDetails)
        return res.status(200).json(GetDetails)


    } catch (e) {
        console.log(e.message)

    }

}

const article = async (req, res) => {
    const { name, patient_id, history, medicine_given, location, phoneno,age,address,gender } = req.body
    try {
        if (!name || !patient_id) {
            return res.status(400).json({
                message: "Provide name and patient_id"
            })
     
        }

        const newUser = await users.create({
            name, patient_id, history, medicine_given, location, phoneno,age,address,gender
        });
        console.log(newUser)
        return res.status(200).json(newUser)

    } catch (e) {
        return res.status(400).json({
            message: "error check again"
        })
        console.log(e.message)
    }


}
const editarticle = async (req, res) => {
    const { id } = req.params
    try {
        const editUser = await users.findByIdAndUpdate({ _id:id }, req.body);
        const edited = await users.findOne({ _id: id })
        console.log(edited)
        return res.status(200).json(editUser)
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({
            message: "Error in updating edit"
        })
    }
}

const deleteArticle = async (req, res) => {
    const { id } = req.params;

    try {

        const DeleteArticle = await users.findByIdAndDelete({ _id: id })
        const AllData = await users.find()
        return res.status(200).json(AllData);
        console.log(AllData)

    } catch (e) {
        console.log(e.message)
        return res.status(400).json({
            message: "Error Please Check"
        })
    }
}

module.exports = {
    signin,
    logout,
    signup,
    article,
    editarticle,
    deleteArticle,
    AllDetails, GetDetailsFromData,
    GetItmesById
}