const mongoose = require('mongoose');
const { MONGODB_URI} = require("./../config");

// mongoose.connect(DATABASE, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
// })

module.exports = async () => {
    try {
        console.log("DB")
         await mongoose.connect(MONGODB_URI, options)
         console.log(':::> Connected to MongoDB database')
    } catch (error) {
         console.log("<::: Couldn't connect to database ", error)
    }
};
