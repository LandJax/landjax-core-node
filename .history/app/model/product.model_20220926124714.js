const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    product
})

module.exports = mongoose.model("Product", productSchema)