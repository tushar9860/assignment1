// Logout.js
import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <button
      className="block text-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
      onClick={onLogout}
    >
      Log out
    </button>
  );
};

export default Logout;
