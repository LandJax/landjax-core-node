require("dotenv").config()

console.log(process.env.MONGODB_URI)
module.exports = {MONGODB_URI : process.env.MONGODB_URI}