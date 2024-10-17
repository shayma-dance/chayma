import React from 'react';

function ProfileSection() {
  const user = {
    name: "shayma habibi",
    profileImage: "https://via.placeholder.com/100", // Placeholder image
  };

  return (
    <div className="flex items-center bg-white p-5 rounded-lg shadow">
      <img src={user.profileImage} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
      <div>
        <h1 className="text-xl font-bold">Welcome, {user.name}!</h1>
        <p className="text-gray-600">Here’s what you’re enrolled in:</p>
      </div>
    </div>
  );
}

export default ProfileSection;
