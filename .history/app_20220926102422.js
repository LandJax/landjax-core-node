const express = require('express')
const cors = require('cors')
require("./app/config/mongo-db.config")()
require('dotenv')

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/auth", require("./app/routes/auth.route"))
app.use("/api/v1/users", require("./app/routes/users.route"))
app.use("/api/v1/products", require("./app/routes/product.route"))



app.get("/", (req, res) => {
    res.status(200).send("welcom to landjax server")
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
    console.log(process.env.NODE_ENV)
})