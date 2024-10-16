
import React,{useState} from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
// import Login from './components/features/login
import Sign from './components/features/SignUp'
import Courses from './components/courses/PostList'
import SelectItem from './components/courses/SelectItem'

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
     </Routes>
     </Router>
    
      </div>
       
     
       
     
    </>
  )
}

export default App
