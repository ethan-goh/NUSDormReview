const Review = require('../models/reviewModel')

const createWorkout = async (req, res) => {
    const { rating, description } = req.body
    
    try {
        const review = await Review.create({rating, description})
        res.status(200).json(review)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createWorkout
}