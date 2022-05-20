const mongoose = require('mongoose');
const { MONGODB_URI} = require("./../config");

const options
module.exports = async () => {
    try {
        console.log("DB")
        await mongoose.connect(MONGODB_URI, options)
        console.log(':::> Connected to MongoDB database')
    } catch (error) {
        console.log("<::: Couldn't connect to database ", error)
    }
};
