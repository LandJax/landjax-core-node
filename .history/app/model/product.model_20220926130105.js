const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    productDesc: {type: String},
    locaton: {
        city: String,
        state: String,
        country: String
    },

    isOnSale: {type: Boolean},
    owner: id
    

})

module.exports = mongoose.model("Product", productSchema)