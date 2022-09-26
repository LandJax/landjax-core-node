const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    producr
})

module.exports = mongoose.model("Product", productSchema)