require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const reviewRoutes = require("./routes/reviewRoutes")

const app = express()




app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/reviews', reviewRoutes)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})