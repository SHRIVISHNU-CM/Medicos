const users = require("../config/dataSchema")
const signin = (req, res) => {
    const { name, password } = req.body
    if (!name || !password) {
        res.status(400).json({
            message: "Name and password are required"
        })
    }
    if (name === "SHRIVIDYACM" && password === "hello1") {
        res.status(200).json({
            message: "user loggined"
        })
    }
    res.send("hi")
}

const article = async (req, res) => {
    const { name, patient_id, history, medicine_given ,location,phoneno} = req.body
    try {
        const newUser = await users.create({
            name, patient_id, history, medicine_given,location,phoneno
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
        const editUser = await users.findByIdAndUpdate({ _id: id }, req.body);
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
    article,
    editarticle,
    deleteArticle
}