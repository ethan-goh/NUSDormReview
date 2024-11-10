const express = require('express')
const Review = require('../models/reviewModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: "GET all reviews"})
})

router.get('/:id', (req, res) => {
    res.json({msg: "GET a single review"})
})

router.post('/', async (req, res) => {
    const { rating, description } = req.body
    
    try {
        const review = await Review.create({rating, description})
        res.status(200).json(review)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/', (req, res) => {
    res.json({msg: "DELETE a review"})
})

router.patch('/', (req, res) => {
    res.json({msg: "UPDATE a review"})
})

module.exports = router