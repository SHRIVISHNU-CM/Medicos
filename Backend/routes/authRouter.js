const { signin,article ,editarticle} = require("../contoller/authcontoller")
const express = require('express')
const router = express.Router()

router.post('/signin', signin)
router.post('/newarticle',article)
router.put('/editarticle/:id',editarticle)
module.exports = router