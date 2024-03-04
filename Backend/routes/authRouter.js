const { signin,signup,article ,editarticle, deleteArticle, AllDetails,GetDetailsFromData,GetItmesById} = require("../contoller/authcontoller")
const express = require('express')
const router = express.Router()

router.post('/signin', signin)
router.post('/signup',signup)
router.get('/',AllDetails)
router.get('/:id',GetDetailsFromData)
router.get('/byid/:id',GetItmesById)
router.post('/newarticle',article)
router.put('/editarticle/:id',editarticle);
router.delete('/deletearticle/:id',deleteArticle)
module.exports = router