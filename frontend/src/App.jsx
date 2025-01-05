import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import HostelReview from './pages/HostelReview';
import ReviewForm from './components/ReviewForm';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { user } = useAuthContext()
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
          <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
          <Route path="/:hostelLink/reviews" element={<HostelReview />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App