import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ReviewsContextProvider } from './context/ReviewContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ReviewsContextProvider>
        <App />
      </ReviewsContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
