import React, { useState } from 'react';
import { FaHome, FaUserEdit, FaClipboardList, FaSignOutAlt, FaUsers } from 'react-icons/fa'; // Added users icon
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); 
  };

  const handleHomeNavigation = () => {
    navigate('/'); 
  };

  const handleMyStudentsNavigation = () => {
    navigate('/my-students'); // Change this to your actual route for My Students
  };

  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col">
      <div className="p-5 bg-[#F9627D] text-white text-xl font-semibold">Student Dashboard</div>
      <nav className="mt-4">
        <ul>
          <li 
            className="flex items-center p-4 hover:bg-[#fda7b7] cursor-pointer"
            onClick={handleHomeNavigation}
          >
            <FaHome className="mr-2" /> Home
          </li>
          <li className="flex items-center p-4 hover:bg-[#fda7b7] cursor-pointer">
            <FaUserEdit className="mr-2" onClick={()=>{}}/> Add course
          </li>
          <li className="flex items-center p-4 hover:bg-[#fda7b7] cursor-pointer">
            <FaUserEdit className="mr-2" /> Update Profile
          </li>
          <li 
            className="flex items-center p-4 hover:bg-[#fda7b7] cursor-pointer"
            onClick={handleMyStudentsNavigation}
          >
            <FaUsers className="mr-2" /> My Students
          </li>
          <li 
            className="flex items-center p-4 hover:bg-[#fda7b7] cursor-pointer"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
