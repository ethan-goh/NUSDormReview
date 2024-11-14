import React, { useState } from 'react'
import { useReviewsContext } from '../hooks/useReviewsContext';

const ReviewForm = ({isOpen, onFormClose}) => {
    if (!isOpen) return null;
    const { dispatch } = useReviewsContext()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [hostel, setHostel] = useState("")
    const [rating, setRating] = useState(null)
    const [showHostels, setShowHostels] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const review = { title, rating, description, hostel }
        const response = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/api/reviews`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setError(null)
            setTitle("")
            setDescription("")
            setHostel("")
            setRating("")
            dispatch({type: 'CREATE_REVIEW', payload: json})
        }
    }
    
    return (    
            <div class="inset-0 z-[999] fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
                <form onSubmit={handleSubmit} class="w-[50vw] h-[50vh] bg-white p-4 rounded-lg shadow-lg">
                    <h3>Add a New Review</h3>
                    <label>Review Title:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} /> 

                    <label>Rating:</label>
                    <input type="number" onChange={(e) => setRating(e.target.value)} value={rating} />               

                    <label>Hostel:</label>
                    <input type="text" onChange={(e) => setHostel(e.target.value)} value={hostel} /> 
                    
                    <label>Description:</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} /> 
                    
                    <button onClick={onFormClose} class="text-black">Close</button>
                    <button type="submit" class="text-black">Sabmit</button>
                </form>
                
            </div>
        )
    }

export default ReviewForm