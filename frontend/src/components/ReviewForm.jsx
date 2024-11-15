import React, { useState } from 'react'
import { useReviewsContext } from '../hooks/useReviewsContext';
import { Rating } from 'react-simple-star-rating'

const ReviewForm = ({isOpen, onFormClose}) => {
    if (!isOpen) return null;
    const { dispatch } = useReviewsContext()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [hostel, setHostel] = useState("")
    const [showHostels, setShowHostels] = useState(false)
    const [error, setError] = useState(null)
    const [rating, setRating] = useState(0); 
      
    const handleRating = (rate) => {
        setRating(rate);
    };
    

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
            setRating(0)
            dispatch({type: 'CREATE_REVIEW', payload: json})
            onFormClose()
        }
    }
    
    return (    
            <div class="inset-0 z-[999] fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center font-poppins">
                <form onSubmit={handleSubmit} class="w-full max-w-md sm:max-w-xs md:max-w-lg bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-center">
                    <div class="relative m-4 items-center flex justify-center text-black h-18">
                        <h3 class="text-xl">
                        New Review
                        </h3>
                    </div>
                    <div class="flex flex-col gap-4 p-4">
                        <div class="w-full max-w-sm min-w-[200px]">
                            <label class="block mb-2 text-md text-slate-800" >Review Title:</label>
                            <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-800 text-md border
                             border-slate-200 rounded-md px-3 py-2 transition duration-300 focus:outline-none focus:border-slate-400
                              hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Title" onChange={(e) => setTitle(e.target.value)} value={title} /> 
                        </div>
                        
                        <div class="w-full max-w-sm min-w-[200px]">
                            <label class="block mb-2 text-md text-slate-800">Hostel:</label>
                            <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-800 text-md border
                             border-slate-200 rounded-md px-3 py-2 transition duration-300 focus:outline-none focus:border-slate-400
                              hover:border-slate-300 shadow-sm focus:shadow" placeholder="Hostel" onChange={(e) => setHostel(e.target.value)} value={hostel} /> 
                        </div>

                        <div class="w-full max-w-sm min-w-[200px]">
                            <div class="flex flex-row space-x-1 justify-center items-center">
                                <Rating onClick={handleRating} ratingValue={rating} size={75} label fillColor="orange" emptyColor="gray" SVGclassName='inline'/>  
                            </div> 
                        </div>         
                        
                        <textarea type="text" class="w-full h-32 bg-transparent placeholder:text-slate-400 text-slate-800 text-sm border
                             border-slate-200 rounded-md px-3 py-2 my-4 transition duration-300 focus:outline-none focus:border-slate-400
                              hover:border-slate-300 shadow-sm focus:shadow resize-none" placeholder="Share about your experience!" onChange={(e) => setDescription(e.target.value)} value={description} /> 
                    </div>
                    <div class="flex justify-end w-full max-w-sm space-x-4">
                        <button onClick={onFormClose} class="text-black border rounded-md px-2 py-2 bg-white transition duration-200 hover:bg-slate-300">Cancel</button>
                        <button type="submit" class="text-black border rounded-md px-2 py-2 transition duration-200 bg-white hover:bg-slate-300">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }

export default ReviewForm