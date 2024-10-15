
import './App.css'
import Navbar from './components/navbar/navbar'
// import Login from './components/features/login
import Sign from './components/features/SignUp'

import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
     <div className="w-full h-full flex flex-col items-center justify-center space-y-4 ">
     <Router>
     <Navbar/>
     {/* <Login/> */}

     <Routes>
      <Route  path= "/register" element={<Sign/>}/>

     
     </Routes>
     </Router>
    
      </div>
       
     
       
     
    </>
  )
}

export default App
