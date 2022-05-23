const express = require('express')
const router = express.Router()

const AuthController = require('./../controllers/auth.controller')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)


router.get("/test/auth", (req, res)=>{
    res.status(200).send({status: true, data: null, message: "success auth"})
})

module.exports = router

