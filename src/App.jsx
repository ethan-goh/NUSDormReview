import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <section className="h-screen flex items-center justify-center m-12 text-center text-3xl font-poppins">
          <p>
            Welcome to NUSDormReviews!
          </p>
          
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App