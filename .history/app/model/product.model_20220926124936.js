const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    productDesc: {type
})

module.exports = mongoose.model("Product", productSchema)