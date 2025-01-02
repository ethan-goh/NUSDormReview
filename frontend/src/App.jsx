import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import HostelReview from './pages/HostelReview';
import ReviewForm from './components/ReviewForm';
import Signup from './pages/Signup';
import Login from './pages/Login';

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
      <ReviewForm isOpen={ modalOpen } onFormClose={ closeModal }/>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:hostelLink/reviews" element={<HostelReview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App