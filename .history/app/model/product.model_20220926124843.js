const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    productDesc: {
})

module.exports = mongoose.model("Product", productSchema)