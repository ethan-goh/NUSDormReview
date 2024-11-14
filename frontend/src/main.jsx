import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ReviewsContextProvider } from './context/ReviewContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewsContextProvider>
      <App />
    </ReviewsContextProvider>
  </StrictMode>,
)
