const express = require('express')
const { createWorkout } = require('../controllers/reviewControllers')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: "GET all reviews"})
})

router.get('/:id', (req, res) => {
    res.json({msg: "GET a single review"})
})

router.post('/', createWorkout)

router.delete('/', (req, res) => {
    res.json({msg: "DELETE a review"})
})

router.patch('/', (req, res) => {
    res.json({msg: "UPDATE a review"})
})

module.exports = router