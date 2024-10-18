<<<<<<< HEAD
import React from 'react'
import Logo from "../../../public/logo.svg"
import { NavLink } from 'react-router-dom'
function navbar() {
  return (
    <div className='w-full flex items-center justify-between ml-auto p-4 ' >
        <div className="font-bold text-[#F9627D]">
            YOURLOGOHERE
        </div>
        <div className="">
            <input className='h-10 w-96 bg-neutral-100 outline-none rounded p-4 flex items-center placeholder:text-sm' type='text' placeholder='Search'/>
        </div>
        <div className="flex items-center space-x-4">
            <button className='p-2 text-[#F9627D] bg-white  font-bold rounded text-sm ' >Login</button>
          <NavLink to = "/register" >
          <span >signUp</span>
          </NavLink>
=======
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../Authentication/SignUp/Modal'; 
import LoginModal from '../Authentication/Login/Modal';
>>>>>>> 5b0ad82d13b1814ede0134ce4d3004d58e03973d

function Navbar({ openLoginModal, openSignUpModal, handleLogin, user }) {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); 
    }
  }, []);

  const handleSignUpClick = () => setIsSignUpModalOpen(true);
  const handleLoginClick = () => setIsLoginModalOpen(true);

  const handleSuccessfulLogin = (token, role) => {
    localStorage.setItem('token', token); 
    setIsLoggedIn(true); 
    navigate(role === 'coach' ? '/coach-dashboard' : '/student-dashboard'); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); 
  };

const handleDashboardClick = () => {
  if (user) {
    navigate(user.role === 'coach' ? '/coach-dashboard' : '/student-dashboard');
  } 
};

  return (
    <div className="w-full flex items-center justify-between p-4 bg-white shadow-md">
      <div className="font-bold text-[#F9627D] text-2xl">Coachify</div>
      <div className="flex space-x-8">
        <NavLink to="/" className="text-gray-700 hover:text-[#F9627D]">Home</NavLink>
        <NavLink to="/courses" className="text-gray-700 hover:text-[#F9627D]">Courses</NavLink>
        <NavLink to="/trainers" className="text-gray-700 hover:text-[#F9627D]">Trainers</NavLink>
        <NavLink to="/categories" className="text-gray-700 hover:text-[#F9627D]">Categories</NavLink>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <button 
              onClick={handleDashboardClick} 
              className="p-2 bg-[#F9627D] text-white font-bold rounded text-sm"
            >
              Dashboard
            </button>
            <button 
              onClick={handleLogout}
              className="p-2 text-white bg-red-600 font-bold rounded text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button 
              className="p-2 text-[#F9627D] bg-white border border-[#F9627D] font-bold rounded text-sm"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button 
              onClick={handleSignUpClick} 
              className="p-2 bg-[#F9627D] text-white font-bold rounded text-sm"
            >
              Sign Up
            </button>
          </>
        )}
      </div>

      {isSignUpModalOpen && (
        <Modal closeModal={() => setIsSignUpModalOpen(false)} />
      )}

      {isLoginModalOpen && (
        <LoginModal 
          closeModal={() => setIsLoginModalOpen(false)} 
          handleLogin={handleSuccessfulLogin}
        />
      )}
    </div>
  );
}

export default Navbar;
