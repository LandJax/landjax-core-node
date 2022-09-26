const productModel = require('../model/product.model')

const router = require('express').Router()

router.get("/test/products", (req, res)=>{
    res.status(200).send({status: true, data: null, message: "success product"})
})

router.get("/create/product", async (req, res) => {
    try{

    }
    
})

module.exports = router
