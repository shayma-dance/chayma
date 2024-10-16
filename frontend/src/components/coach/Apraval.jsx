import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoachDashboard = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const res = await axios.get('/api/enrollments/pending'); 
        setEnrollments(res.data);
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    };

    fetchEnrollments();
  }, []);

  const handleApproval = async (id) => {
    try {await axios.put(`/api/enrollment/${id}`, { action: 'approved' });
    setEnrollments(enrollments.filter(enrollment => enrollment._id !== id))
        
    } catch (error) {
        console.error(error);
    }
   
  };

  const handleCancellation = async (id) => {

    try {
        await axios.put(`/api/enrollment/${id}`, { action: 'canceled' });
        setEnrollments(enrollments.filter(enrollment => enrollment._id !== id))
    } catch (error) {
        console.error(error);
    }
   
  };

  return (
    <div>
      <h1>Pending Enrollments</h1>
      {enrollments.map(enrollment => (
        <div key={enrollment._id}>
          <p>User ID: {enrollment.user}</p>
          <p>Course ID: {enrollment.course}</p>
          <button onClick={() => handleApproval(enrollment._id)}>Approve</button>
          <button onClick={() => handleCancellation(enrollment._id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default CoachDashboard;