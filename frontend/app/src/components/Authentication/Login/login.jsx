
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Login({ closeModal, handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        handleLogin(data.token, data.role); // Call the handleLogin function from App
        if (data.role === 'coach') {
          window.location.href = '/coach-dashboard'; // Redirect to coach dashboard
        } else {
          window.location.href = '/student-dashboard'; // Redirect to student dashboard
        }
      } else {
        alert(data.msg); // Handle errors
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        {/* Email Input Field with Icon */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faEnvelope} className="p-2 text-gray-500 bg-gray-200" />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input Field with Icon */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faLock} className="p-2 text-gray-500 bg-gray-200" />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="submit"
            className="bg-[#F9627D] text-white p-2 rounded-md shadow hover:bg-[#D44E66] transition duration-200"
          >
            Login
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login; 
