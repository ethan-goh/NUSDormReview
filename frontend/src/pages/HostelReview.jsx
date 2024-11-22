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

    const ratingReducer = (total, num) => {
        return total + num
    }

    const hostelName = hostelLink.split("-").join(" ")
    const averageRating = ((reviews.map((r) => r.rating).reduce(ratingReducer, 0))/reviews.length).toFixed(2)


  return (
    <div>
        <div class="w-full justify-center font-poppins text-xl font-semibold place-items-center p-6">
            <h1>
                Reviews for {hostelName}{' '}
                {reviews.length > 0 && (
                    <span class="font-normal inline-flex items-center ml-1">
                        {averageRating}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            class="w-5 h-5 text-yellow-500 ml-1"
                        >
                            <path d="M12 2.1l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.77l-6.18 3.26L7 14.23 2 9.36l6.91-1L12 2.1z" />
                        </svg>
                    </span>
                )}
            </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {reviews && reviews.map((review) => 
                <div>
                    <ReviewDetails key={review._id} review={review} />
                </div>
            )}
        </div>
        {reviews.length == 0 && (
                <div class="flex items-center justify-center h-64">
                    <h2 class="font-poppins text-xl">
                        No reviews yet!
                    </h2>
                </div>
        )}
        
    </div>
  )
}

export default HostelReview