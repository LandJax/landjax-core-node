const router = require('express').Router()

router.get("/test/users", (req, res)=>{
    res.status(200).send({status: true, data: null, message: "success user"})
})

module.exports = router
