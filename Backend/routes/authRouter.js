const { signin,article ,editarticle, deleteArticle} = require("../contoller/authcontoller")
const express = require('express')
const router = express.Router()

router.post('/signin', signin)
router.post('/newarticle',article)
router.put('/editarticle/:id',editarticle);
router.delete('/deletearticle/:id',deleteArticle)
module.exports = router