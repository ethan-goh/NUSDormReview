import React, { createContext, useReducer } from 'react'

export const ReviewsContext = createContext()

export const reviewsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_REVIEWS':
            return {
                reviews: action.payload
            }
        case 'CREATE_REVIEW':
            return {
                reviews: [action.payload, ...state.reviews]
            }
        default:
            return state
    }
}

export const ReviewsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reviewsReducer, {
        reviews: []
    })

    return (
        <ReviewsContext.Provider value={{...state, dispatch}}>
            { children } 
        </ReviewsContext.Provider>
    )
}