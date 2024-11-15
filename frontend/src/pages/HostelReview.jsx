import React, { useEffect } from 'react'
import { useReviewsContext } from '../hooks/useReviewsContext'
import { useParams } from 'react-router-dom'

import ReviewDetails from '../components/ReviewDetails'

const HostelReview = () => {
    const {reviews, dispatch} = useReviewsContext()
    const { hostelLink } = useParams()
    console.log(hostelLink)
    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/api/reviews/${hostelLink}/reviews`, {
                method: 'GET',
                credentials: 'include'
            })
            const json = await response.json()
            
            if (response.ok) {
                dispatch({type: 'SET_REVIEWS', payload: json})
            }
        }
        fetchReviews()
    }, [hostelLink])

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