const mongoose = require('mongoose')



const productSchema = new mongoose.Schema({
    productName: {type: String},
    productDesc: {type: String},
    locaton: {
        city: {type: String},
        state: {tString},
        country: {String}
    },

    isOnSale: {type: Boolean},
    owner: {type: String}
    

})

module.exports = mongoose.model("Product", productSchema)