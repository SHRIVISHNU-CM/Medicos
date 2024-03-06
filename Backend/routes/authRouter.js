const { signin,signup,logout,article ,editarticle, deleteArticle, AllDetails,GetDetailsFromData,GetItmesById} = require("../contoller/authcontoller")
const {verifySignin,verifytoken,renewtoken} = require('../MIddleware/authmiddleware')
const express = require('express')
const router = express.Router()

router.post('/signin',[verifySignin], signin)
router.post('/signup',signup)
router.get('/logout',[verifytoken],logout)
router.get('/',[verifytoken],AllDetails)
router.get('/:id',[verifytoken],GetDetailsFromData)
router.get('/byid/:id',[verifytoken],GetItmesById)
router.post('/newarticle',[verifytoken],article)
router.put('/editarticle/:id',[verifytoken],editarticle);
router.delete('/deletearticle/:id',[verifytoken],deleteArticle)
module.exports = router