const users = require("../config/dataSchema")
const userModel = require("../config/UserModel")
const jwt = require('jsonwebtoken')
const secret = "vishnu"
const signin =async (req, res) => {
    const { name, password } = req.body
    try{
        const result = await userModel.create({
            name,password
        })  
        console.log(result)
        res.status(200).json({
            message:"Successfully signed"
        })
    }catch(e){
        console.log(e.message)
        res.status(400).json({
            message:"Error in login"
        })
    }
    
}
const signup = async(req,res)=>{
    const {name,password} = req.body
    try{
        const result = await userModel.findOne({name:name})
        if(name !== result.name){
            res.status(400).json({
                message:"Check Name"
            })
        }
        if(password !== result.password){
            res.status(400).json({
                message:"Check password"
            })
        }
        const token = jwt.sign({id: result._id},secret,{
            expiresIn:120
        })
        res.status(200).json({
            message:"Ho lo",
            access_token:token
        })

    }catch(e){
        console.log(e)
        res.status(400).json({
            messsage:"Error in sigin"
        })
    }
}
const AllDetails = async (req, res) => {
    try {
        const Details = await users.find()
        console.log(Details);

        res.status(200).json(Details)

    } catch (e) {
        console.log(e.message)
        res.status(400).json({ message: "Error in getting data" })
    }
}
const GetItmesById = async(req,res)=>{
    const {id} = req.params;
    try{
        const response = await users.findOne({_id:id})
        console.log(response)
        res.status(200).json(response)

    }catch(e){
        console.log(e)
        res.status(400).json({message:"Error in fetching data using id"})
    }

}
const GetDetailsFromData = async (req, res) => {
    const { id } = req.params;
    try {
        const GetDetails = await users.findOne({ patient_id: id })
        console.log(GetDetails)
        res.status(200).json(GetDetails)


    } catch (e) {
        console.log(e.message)

    }

}

const article = async (req, res) => {
    const { name, patient_id, history, medicine_given, location, phoneno,age,address,gender } = req.body
    try {
        if (!name || !patient_id) {
            res.status(400).json({
                message: "Provide name and patient_id"
            })
            return
        }

        const newUser = await users.create({
            name, patient_id, history, medicine_given, location, phoneno,age,address,gender
        });
        console.log(newUser)
        res.status(200).json(newUser)

    } catch (e) {
        res.status(400).json({
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
        res.status(200).json(editUser)
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: "Error in updating edit"
        })
    }
}

const deleteArticle = async (req, res) => {
    const { id } = req.params;

    try {

        const DeleteArticle = await users.findByIdAndDelete({ _id: id })
        const AllData = await users.find()
        res.status(200).json(AllData);
        console.log(AllData)

    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: "Error Please Check"
        })
    }
}

module.exports = {
    signin,
    signup,
    article,
    editarticle,
    deleteArticle,
    AllDetails, GetDetailsFromData,
    GetItmesById
}