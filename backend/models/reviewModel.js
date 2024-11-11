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
    },
    hostel: {
        type: String,
        required: true,
        enum: ['Residential College 4', 'Tembusu College', 'Ridge View Residential College', 'College of Alice and Peter Tan',
                'Eusoff Hall', 'Kent Ridge Hall', 'Temasek Hall', 'Sheares Hall', 'King Edward VII Hall', 'Raffles Hall',
                'Helix House', 'LightHouse', 'Pioneer House',
                'PGP Residence', 'UTown Residence']
    },
    hostelType: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)