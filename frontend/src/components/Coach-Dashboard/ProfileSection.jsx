import React, { useState } from 'react';

function ProfileSection() {


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profileImage: reader.result, 
        }));
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="flex items-center bg-white p-5 rounded-lg shadow">
      <label className="cursor-pointer">
        <img 
          src={user.profileImage} 
          alt="Profile" 
          className="w-24 h-24 rounded-full mr-4" 
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="hidden" // Hide the file input
        />
      </label>
      <div>
        <h1 className="text-xl font-bold">Welcome, {user.name}!</h1>
        <p className="text-gray-600">Here’s what your Courses:</p>
      </div>
    </div>
  );
}

export default ProfileSection;
