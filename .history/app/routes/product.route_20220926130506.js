const productModel = require('../model/product.model')

const router = require('express').Router()

router.get("/test/products", (req, res)=>{
    res.status(200).send({status: true, data: null, message: "success product"})
})

router.get("/create/product", (req, res) => {
    const newProduct = new productModel({
        productName: req.body.productName,
        productDesc: req.body.productDescription,
        locaton: {req.body.productDescription},

        isOnSale: req.body.productDescription,
        owner: req.body.productDescription

    })
})

module.exports = router
