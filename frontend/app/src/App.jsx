// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import SignUpModal from './components/Authentication/SignUp/Modal';
import LoginModal from './components/Authentication/Login/Modal';
import Hero from './components/hero-section/Hero';
import Coaches from './components/Coaches-Section/Coaches';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoachDashboard from './components/Coach-Dashboard/Coach';
import StudentDashboard from './components/Student-Dashboard/Student';
import Courses from "./components/Courses-section/Courses"

function App() {
  const [selected, setSelected] = useState(null);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set the user state from localStorage
    }
  }, []);

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const closeModals = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(false);
  };

  const LayoutWithNavbarAndHero = ({ children }) => {
    return (
      <>
        <Navbar 
          user={user} 
          setUser={setUser} 
          openLoginModal={openLoginModal} 
          openSignUpModal={openSignUpModal} 
        />
        <Hero />
        {children}
       
      </>
    );
  };

  return (
    <Router>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<LayoutWithNavbarAndHero></LayoutWithNavbarAndHero>} />
          <Route path="/register" element={<LayoutWithNavbarAndHero><SignUpModal closeModal={closeModals} /></LayoutWithNavbarAndHero>} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
        <Coaches />
        <Courses />
        

        {isSignUpOpen && (
          <SignUpModal closeModal={closeModals} />
        )}

        {isLoginOpen && (
          <LoginModal closeModal={closeModals} />
        )}
      </div>
    </Router>
  );
}

export default App;
