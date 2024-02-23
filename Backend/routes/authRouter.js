const { signin,article ,editarticle, deleteArticle, AllDetails,GetDetailsFromData} = require("../contoller/authcontoller")
const express = require('express')
const router = express.Router()

router.post('/signin', signin)
router.get('/',AllDetails)
router.get('/:id',GetDetailsFromData)
router.post('/newarticle',article)
router.put('/editarticle/:id',editarticle);
router.delete('/deletearticle/:id',deleteArticle)
module.exports = router