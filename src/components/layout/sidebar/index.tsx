import React from 'react';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';


const LeftBar: React.FC = () => {
  return(
    <nav className="w-64 p-5 bg-gray-800 text-white">
    <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
    <ul>
      <li className="mb-2">
        <a href="/" className="block text-gray-300 hover:text-white">
          Dashboard
        </a>
      </li>
      <li className="mb-2">
        <a href="/profile" className="block text-gray-300 hover:text-white">
          Profile
        </a>
      </li>
      <li className="mb-2">
        <a href="/settings" className="block text-gray-300 hover:text-white">
          Settings
        </a>
      </li>
    </ul>
  </nav>
);
};

export default LeftBar;
