const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    productDesc: {type: String},
    locaton: {type: string}

})

module.exports = mongoose.model("Product", productSchema)