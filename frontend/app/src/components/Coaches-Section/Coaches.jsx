// components/coaches-section/Coaches.jsx

import React, { useEffect, useState } from 'react';

function Coaches() {
  const [coaches, setCoaches] = useState([]);

  // Fetch coaches from the backend
  const fetchCoaches = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/coaches'); // Adjust the URL as needed
      const data = await response.json();
      setCoaches(data);
    } catch (error) {
      console.error('Error fetching coaches:', error);
    }
  };

  useEffect(() => {
    fetchCoaches(); // Call the fetch function on component mount
  }, []);

  return (
    <div className="coaches-section my-10">
      <h2 className="text-3xl font-bold text-center mb-5">Our Coaches</h2>
      <div className="flex flex-wrap justify-center">
        {coaches.map((coach) => (
          <div key={coach._id} className="coach-card border rounded-lg p-5 m-3 shadow-lg">
            <img src={coach.imageUrl} alt={coach.name} className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-3">{coach.name}</h3>
            <p className="text-gray-600">Age: {coach.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coaches;
