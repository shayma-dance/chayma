import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfile = ({ userId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('user'); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const updatedUser = {
      name,
      email,
      age,
      role,
    };

    try {
      const response = await axios.put(`http://localhost:3000/api/users/${userId}`, updatedUser);
      console.log(response.data);
      alert('User updated successfully!');
      setName('');
      setEmail('');
      setAge('');
      setRole('user');
    } catch (error) {
      console.error('Error updating user:', error.response ? error.response.data : error.message);
      alert('Failed to update user. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white  rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md "
          >
            <option value="user">User</option>
            <option value="coach">Coach</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#F9627D] text-white py-2 rounded-md"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;