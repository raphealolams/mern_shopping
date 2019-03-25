const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./config/keys').mongoURL

const items = require('./routes/api/items')

const app = express()


// Get the request body as JSON
app.use(bodyParser.json())


// connect to db

mongoose.connect(db)
    .then(res => console.log("db connected"))
    .catch(error => console.error(error))


// user routes

app.use("/api/items", items)

// start server 
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))