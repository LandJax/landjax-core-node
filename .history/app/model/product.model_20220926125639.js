const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    productDesc: {type: String},
    locaton: {city: String,
                state: String,
            country}

})

module.exports = mongoose.model("Product", productSchema)