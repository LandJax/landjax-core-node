const express = require('express')
const router = express.Router()

router.get("/test/auth", (req, res)=>{
    res.status(200).send({status: true, data: null, message: "success auth"})
})

module.exports = router