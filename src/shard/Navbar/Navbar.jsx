import React from 'react';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className=" sticky top-0 ">
      <header
        className={`p-4 shadow-md ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <div className="flex justify-between sticky top-0 items-center">
          {/* Logo & App Name */}
          <div className="flex items-center">
            <span className="text-2xl font-bold"> TaskManager</span>
          </div>
          {/* Right Side: Login/Sign Up & Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Login
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
              Sign Up
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
