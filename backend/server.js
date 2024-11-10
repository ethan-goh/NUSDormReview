require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const reviewRoutes = require("./routes/reviewRoutes")

const app = express()


const dbURI = 'mongodb+srv://ethangohye:Donkey.12345@nusdormreviews.p0xsg.mongodb.net/?retryWrites=true&w=majority&appName=NUSDormReviews'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/reviews', reviewRoutes)


app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})