import React from 'react';

function SuccessPopup({ message }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white border border-green-500 p-4 rounded shadow-lg max-w-sm mx-auto">
        <h3 className="text-lg font-semibold text-green-600 mb-2">Success!</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default SuccessPopup;
