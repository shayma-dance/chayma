import React from 'react';
import SignUp from './SignUp';

function Modal({ closeModal, handleLogin }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <SignUp closeModal={closeModal} handleLogin={handleLogin} />
      </div>
    </div>
  );
}

export default Modal;
