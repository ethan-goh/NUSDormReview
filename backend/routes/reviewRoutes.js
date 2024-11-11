const express = require('express')
const { createReview, getReviewsByHostel, getSingleReview } = require('../controllers/reviewControllers')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: "GET all reviews"})
})

router.get('/:id', getSingleReview)

router.get('/:hostel', getReviewsByHostel)

router.post('/', createReview)

router.delete('/', (req, res) => {
    res.json({msg: "DELETE a review"})
})

router.patch('/', (req, res) => {
    res.json({msg: "UPDATE a review"})
})

module.exports = router