const Review = require('../models/reviewModel')
const mongoose = require('mongoose')

const createReview = async (req, res) => {
    const { title, rating, description, hostel } = req.body

    let hostelType = '';
    const residentialColleges = ['Residential College 4', 'Tembusu College', 'Ridge View Residential College', 'College of Alice & Peter Tan'];
    const halls = ['Eusoff Hall', 'Kent Ridge Hall', 'Temasek Hall', 'Sheares Hall', 'King Edward VII Hall', 'Raffles Hall'];
    const houses = ['Helix House', 'LightHouse', 'Pioneer House'];
    const residences = ['PGP Residence', 'UTown Residence'];

    if (residentialColleges.includes(hostel)) {
        hostelType = 'Residential College';
    } else if (halls.includes(hostel)) {
        hostelType = 'Hall';
    } else if (houses.includes(hostel)) {
        hostelType = 'House';
    } else if (residences.includes(hostel)) {
        hostelType = 'Residence';
    }

    const hostelStripped = hostel.split(" ").join("-")
    try {
        const review = await Review.create({ title, rating, description, hostel: hostelStripped, hostelType })
        res.status(200).json(review)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllReviews = async (req, res) => {
    const reviews = await Review.find({})
    
    res.status(200).json(reviews)


}

const getReviewsByHostel = async (req, res) => {
    const { hostelLink } = req.params
    
    const reviews = await Review.find({ hostel: hostelLink })
    try {
        res.status(200).json(reviews)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getSingleReview = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such review"})
    }
    const review = await Review.findById(id)
    
    if (!review) {
        return res.status(404).json({error: 'No such review'})
    }
    res.status(200).json(review)
}

const editReview = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such review"})
    }

    const review = await Review.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!review) {
        return res.status(404).json({error: 'No such review'})
    }

    res.status(200).json(review)
}

module.exports = {
    createReview,
    getAllReviews,
    getReviewsByHostel,
    getSingleReview,
    editReview
}