const productModel = require('../model/product.model')

const router = require('express').Router()

router.get("/test/products", (req, res)=>{
    res.status(200).send({status: true, data: null, message: "success product"})
})

router.post("/create/product", async (req, res) => {
    try{
        const newProduct = new productModel({
            productName: req.body.productName,
            productDesc: req.body.productDescription,
            locaton: {city: req.body.locaton,
                state: req.body.state,
                country: req.body.country,},
    
            isOnSale: req.body.isOnSale,
            owner: req.body.owner
    
        })
    
        const storeNewProduct = await newProduct.save()
        res.status.send({product: storeNewProduct, success: true})
    }
    catch(err){
        console.log(err)
        res.status(400).send(err.message)
    }
    
})

module.exports = router
