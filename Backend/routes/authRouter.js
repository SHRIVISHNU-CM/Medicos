const { signin } = require("../contoller/authcontoller")
const express = require('express')
const router = express.Router()

router.post('/signin', signin)
module.exports = router