import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HostelReview from './pages/HostelReview';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div className="pt-16 pl-[250px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:hostelname/reviews" element={<HostelReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App