const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    produc
})

module.exports = mongoose.model("Product", productSchema)