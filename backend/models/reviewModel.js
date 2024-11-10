const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)