import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import SuccessPopup from './SuccessPopUp'; 
import { useNavigate } from 'react-router-dom';

function SignUp({ closeModal }) {
  const [role, setRole] = useState('user'); // Default to 'user'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // i use this hook For navigation after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send registration data to backend
      const response = await axios.post('http://localhost:3000/api/users/register', {
        name,
        email,
        password,
        confirmPassword,
        role, // Send role as part of registration
      });

      const { token } = response.data; // Get token from response
      setSuccessMessage("🎉 You have successfully registered! 🚀 Let's go to your Dashboard... 👏");
      setError(''); // Clear any previous errors

      setTimeout(() => {
        // Store token and role in localStorage
        localStorage.setItem('token', token);
        const userData = { role };
        localStorage.setItem('user', JSON.stringify(userData)); 

        closeModal(); // Close the modal

        // Redirect based on user role
        navigate(`/${role}-dashboard`);
      }, 3000);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.msg); // Show error message from server
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div>
      {successMessage && (
        <SuccessPopup message={successMessage} />
      )}
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        {/* Input fields */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faUser} className="p-2 text-gray-500 bg-gray-200" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faEnvelope} className="p-2 text-gray-500 bg-gray-200" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faLock} className="p-2 text-gray-500 bg-gray-200" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faLock} className="p-2 text-gray-500 bg-gray-200" />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            required
          />
        </div>

        {/* Role Selection */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Please select your role:</h3>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="student"
                checked={role === 'student'}
                onChange={() => setRole('student')}
                className="mr-1"
              />
              <span className="text-gray-700">Student</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="coach"
                checked={role === 'coach'}
                onChange={() => setRole('coach')}
                className="mr-1"
              />
              <span className="text-gray-700">Coach</span>
            </label>
          </div>
        </div>

        {/* Error Messages */}
        {error && <div className="text-red-500 text-center">{error}</div>}

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-[#F9627D] text-white py-2 px-6 rounded-md hover:bg-[#f63b61] transition duration-300"
          >
            Register
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition duration-300"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
