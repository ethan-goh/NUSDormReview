import React from 'react'
import { Rating } from 'react-simple-star-rating'

const ReviewDetails = ({ review }) => {
    return (
        <div class="bg-white shadow-lg rounded-lg p-4 w-full max-w-md mx-auto border border-slate-200">
            <h2 class="text-xl font-semibold text-slate-800">{review.title}</h2>
            <div class="mt-2">
                <Rating
                    readonly
                    initialValue={review.rating}
                    size={20}
                    fillColor="orange"
                    emptyColor="gray"
                    SVGclassName="inline"
                />
            </div>
            <p class="text-sm text-slate-700 mt-4">{review.description}</p>
        </div>
    )
}

export default ReviewDetails