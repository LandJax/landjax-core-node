const productModel = require('../model/product.model')

const router = require('express').Router()

router.get("/test/products", (req, res)=>{
    res.status(200).send({status: true, data: null, message: "success product"})
})

router.get("/create/product", (req, res) => {
    const newProduct = new productModel({
        productName: req.body.productName,
        productDesc: req.body.,
        locaton: req.body.,

        isOnSale: req.body.,
        owner: req.body.

    })
})

module.exports = router
