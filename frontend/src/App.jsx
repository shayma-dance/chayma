import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import SignUpModal from './components/Authentication/SignUp/Modal';
import LoginModal from './components/Authentication/Login/Modal';
import Hero from './components/hero-section/Hero';
import Coaches from './components/Coaches-Section/Coaches';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoachDashboard from './components/Coach-Dashboard/Coach';
import StudentDashboard from './components/Student-Dashboard/Student';
import Courses from "./components/Courses-section/Courses";
import Footer from "./components/Footer/Footer";
import AddCourse from "./components/Coach-Dashboard/AddCourse";
import UpdateProfile from './components/Coach-Dashboard/UpdateProfileSection';
import MyStudents from "./components/Coach-Dashboard/MyStudents"

<<<<<<< HEAD
=======
import React,{useState} from 'react'
import './App.css'
import Sign from './components/features/SignUp'
import Navbar from './components/navbar/navbar'
import Courses from './components/courses/PostList'
// import Login from './components/features/login'
import SelectItem from './components/courses/SelectItem'
import CoachDasboard from './components/coach/CoachDashboard'
import StudentDashboard from './components/UserDash'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
>>>>>>> 5b0ad82d13b1814ede0134ce4d3004d58e03973d
function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

<<<<<<< HEAD
  const coachesRef = useRef(null);
  const coursesRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
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

  const handleScrollToCoaches = () => {
    if (coachesRef.current) {
      coachesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const LayoutWithNavbarAndHero = ({ children }) => {
    return (
      <>
        <Navbar 
          user={user} 
          setUser={setUser} 
          openLoginModal={openLoginModal} 
          openSignUpModal={openSignUpModal} 
          onScrollToCoaches={handleScrollToCoaches} 
          onScrollToCourses={handleScrollToCourses} 
        />
        <Hero />
        <div ref={coachesRef}>
          <Coaches />
        </div>
        <div ref={coursesRef}>
          <Courses />
        </div>
        <Footer />
        {children}
      </>
    );
  };

  return (
    <Router>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<LayoutWithNavbarAndHero />} />
          <Route path="/register" element={<LayoutWithNavbarAndHero><SignUpModal closeModal={closeModals} /></LayoutWithNavbarAndHero>} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/my-students" element={<MyStudents />}/>
        </Routes>

        {isSignUpOpen && (
          <SignUpModal closeModal={closeModals} />
        )}

        {isLoginOpen && (
          <LoginModal closeModal={closeModals} />
        )}
=======
     <Routes>
      <Route  path= "/" element={<Courses setselected={setselected}/>}/>
      <Route  path= "/register" element={<Sign/>}/>
      <Route  path= "/onePost" element={<SelectItem element={selected}/>}/>
      <Route  path= "/coach" element={<CoachDasboard/>}/>
      <Route path="/student-dashboard" element={<StudentDashboard />} />
     </Routes>
     </Router>
    
>>>>>>> 5b0ad82d13b1814ede0134ce4d3004d58e03973d
      </div>
    </Router>
  );
}

export default App;
