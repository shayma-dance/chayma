import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function SelectItem({ element }) {
  const [isOpen, setOpen] = useState(false);
  const [enrolledOrNot, setEnrolledOrNot] = useState(null);

  // State to trigger refresh after enrollment
  const [hasEnrolled, setHasEnrolled] = useState(false);

  const enroll = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:3000/api/enrollement/enroll", { 
        courseId: element._id, 
        userId: "670eaa935c43e236addb5fe6", // placeholder for userId
        status: "pending" 
      });
      
      if (res) {
        console.log("Enrollment successful:", res);
        setOpen(true);
        setHasEnrolled(!hasEnrolled); // Toggle state to trigger re-render
      }
    } catch (error) {
      console.error(error);
    }
  };

  const enrolledOrNotfunc = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:3000/api/enrollement/enrolledOrNot", { 
        course: element._id, 
        user: "670eaa935c43e236addb5fe5", // placeholder for userId
      });

      if (res.data) {
        console.log("Fetched enrollment status:", res.data);
        setEnrolledOrNot(res.data);
      } else {
        console.log("No enrollment data returned.");
      }
    } catch (error) {
      console.error("Error fetching enrollment status:", error);
    }
  };

  // Fetch enrollment status when component mounts or after enrolling
  useEffect(() => {
    console.log("Fetching enrollment status...");
    enrolledOrNotfunc();
  }, [hasEnrolled]); // Trigger effect when `hasEnrolled` changes

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full h-48 object-cover" src={element.imageUrl} alt={element.title} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{element.title}</h2>
        <p className="text-gray-700 text-base mb-4">{element.description}</p>
        <h4 className="text-gray-900 font-semibold">Coach: {element.coach.name}</h4>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-red-500">
          <button className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-2 px-4 rounded">
            Cancel
          </button>
        </NavLink>
        {enrolledOrNot ? (
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
            {enrolledOrNot.status}
          </button>
        ) : (
          <button onClick={enroll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enroll
          </button>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Enrolled</h2>
            <p className="text-gray-700 mb-6">You are enrolled in this course.</p>
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectItem;
