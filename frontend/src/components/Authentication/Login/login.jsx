import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Login({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form className="flex flex-col space-y-4">
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
