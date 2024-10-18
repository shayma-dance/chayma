
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
function App() {
const[ selected,setselected]=useState(null)
  return (
    <>
     <div className="w-full h-full flex flex-col items-center justify-center space-y-4 ">
     <Router>
     <Navbar/>
     {/* <Login/> */}

     <Routes>
      <Route  path= "/" element={<Courses setselected={setselected}/>}/>
      <Route  path= "/register" element={<Sign/>}/>
      <Route  path= "/onePost" element={<SelectItem element={selected}/>}/>
      <Route  path= "/coach" element={<CoachDasboard/>}/>
      <Route path="/student-dashboard" element={<StudentDashboard />} />
     </Routes>
     </Router>
    
      </div>
       
     
       
     
    </>
  )
}

export default App
