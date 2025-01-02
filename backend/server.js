require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const reviewRoutes = require("./routes/reviewRoutes")
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_SERVER,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/reviews', reviewRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
