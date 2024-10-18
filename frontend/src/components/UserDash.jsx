import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [approvedCourses, setApprovedCourses] = useState([]);

  useEffect(() => {
    const fetchApprovedCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/enrollement/approvedcourses/670eaa935c43e236addb5fe6');//update with the user id
        setApprovedCourses(response.data);
      } catch (error) {
        console.error('Error fetching approved courses:', error);
      }
    };

    fetchApprovedCourses();
  }, []); 

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Approved Courses</h1>
      <ul className="space-y-4">
        {approvedCourses.map((enrollment) => (
          <li
            key={enrollment._id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <img
              src={enrollment.course.imageUrl}
              alt={enrollment.course.title}
              className="w-full md:w-48 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800">
                {enrollment.course.title}
              </h2>
              <p className="text-gray-600 mt-2">{enrollment.course.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
   
};

export default StudentDashboard;
