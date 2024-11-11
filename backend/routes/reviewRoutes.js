const express = require('express')
const { createReview, getAllReviews, getReviewsByHostel, getSingleReview, editReview } = require('../controllers/reviewControllers')

const router = express.Router()

router.get('/', getAllReviews)

router.get('/:id', getSingleReview)

router.get('/:hostel/reviews', getReviewsByHostel)

router.post('/', createReview)

router.patch('/', editReview)

module.exports = router