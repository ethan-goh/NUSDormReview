const express = require('express')
const { createReview, getAllReviews, getReviewsByHostel, getSingleReview, editReview } = require('../controllers/reviewControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/', getAllReviews)

router.get('/:id', getSingleReview)

router.get('/:hostelLink/reviews', getReviewsByHostel)

router.post('/', createReview)

router.patch('/', editReview)

module.exports = router