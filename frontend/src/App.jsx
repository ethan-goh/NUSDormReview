import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App