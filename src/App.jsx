import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App