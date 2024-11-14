import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HostelReview from './pages/HostelReview';
import ReviewForm from './components/ReviewForm';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <BrowserRouter>
      <Navbar onFormClick={ openModal }/>
      <Sidebar />
      <ReviewForm isOpen={ modalOpen } onFormClose={ closeModal }/>
      <div className="pt-16 pl-[250px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:hostelLink/reviews" element={<HostelReview />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App