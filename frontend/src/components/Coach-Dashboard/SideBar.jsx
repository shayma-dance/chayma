import React, { useState } from 'react';
import { FaHome, FaUserEdit, FaClipboardList, FaSignOutAlt, FaUsers, FaPlusCircle } from 'react-icons/fa'; // Added FaPlusCircle for Add button
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
    navigate('/my-students'); 
  };

  const handleAddCourseNavigation = () => {
    navigate('/add-course'); 
  };

  const handleUpdateProfileNavigation = () => {
    navigate('/update-profile'); 
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
            <FaUserEdit className="mr-2"   onClick={handleUpdateProfileNavigation}  /> Update Profile
          </li>
          <li 
            className="flex items-center p-4 hover:bg-[#fda7b7] cursor-pointer"
            onClick={handleMyStudentsNavigation}
          >
            <FaUsers className="mr-2" /> My Students
          </li>
          <li 
            className="flex items-center p-4 hover:bg-[#fda7b7] cursor-pointer"
            onClick={handleAddCourseNavigation}
          >
            <FaPlusCircle className="mr-2" /> Add Student
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
