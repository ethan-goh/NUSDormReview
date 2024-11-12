import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ReviewDetails from '../components/ReviewDetails'

const HostelReview = () => {
    const [reviews, setReviews] = useState(null)
    const { hostelLink } = useParams()
    console.log(hostelLink)
    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(`http://localhost:4000/api/reviews/${hostelLink}/reviews`, {
                method: 'GET',
                credentials: 'include'
            })
            const json = await response.json()
            console.log(json)
            

            if (response.ok) {
                setReviews(json)
            }
        }
        fetchReviews()
    }, [])

    const hostelName = hostelLink.split("-").join(" ")


  return (
    <div>
        <h1>Reviews for {hostelName}</h1>
        {reviews && reviews.map((r) => 
            <div>
                {r.description}
            </div>
        )}
        
    </div>
  )
}

export default HostelReview