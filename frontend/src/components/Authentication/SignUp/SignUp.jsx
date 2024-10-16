import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function SignUp({ closeModal }) {
  const [role, setRole] = useState('user'); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>
      <form className="flex flex-col space-y-4">
        {/* here are the Input fields with icons */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faUser} className="p-2 text-gray-500 bg-gray-200 " />
          <input
            type="text"
            placeholder="Name"
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faEnvelope} className="p-2 text-gray-500 bg-gray-200" />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            required
          />
        </div>

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

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <FontAwesomeIcon icon={faLock} className="p-2 text-gray-500 bg-gray-200" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 border-none flex-1 focus:outline-none focus:ring-2 focus:ring-[#F9627D] transition duration-200"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

    
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Please select your role:</h3>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
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

        {/*buttons*/}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="submit"
            className="bg-[#F9627D] text-white p-2 rounded-md shadow hover:bg-[#D44E66] transition duration-200"
          >
            Register
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

export default SignUp;
