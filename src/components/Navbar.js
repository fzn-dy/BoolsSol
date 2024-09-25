/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 shadow-xl rounded-3xl z-20 px-8 py-2 border-2 border-black w-[90%] max-w-screen-lg">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="assets/logoblack.png" alt="Logo" className="h-8 mr-6" />
        </a>

        {/* Hamburger Icon for mobile/tablet */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Links - visible on large screens */}
        <ul className="hidden lg:flex space-x-12">
          <li><a href="#markets" className="text-gray-800 hover:text-blue-600">Markets</a></li>
          <li><a href="#wallet" className="text-gray-800 hover:text-blue-600">Wallet</a></li>
          <li><a href="#exchange" className="text-gray-800 hover:text-blue-600">Exchange</a></li>
          <li><a href="#support" className="text-gray-800 hover:text-blue-600">Support</a></li>
        </ul>

        {/* Right Button - visible on large screens */}
        <button className="hidden lg:block bg-[#1d2c51] text-white px-6 py-2 rounded-full hover:bg-[#505aa0] shadow-xl border-2 border-black">
          BUY $BOOLSH
        </button>
      </div>

      {/* Mobile Menu - will only show when hamburger is clicked */}
      {isOpen && (
        <div className="lg:hidden mt-4 absolute top-14 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md w-[90%] py-4 z-30">
          <ul className="flex flex-col space-y-4 text-center">
            <li><a href="#markets" className="text-gray-800 hover:text-blue-600">Markets</a></li>
            <li><a href="#wallet" className="text-gray-800 hover:text-blue-600">Wallet</a></li>
            <li><a href="#exchange" className="text-gray-800 hover:text-blue-600">Exchange</a></li>
            <li><a href="#support" className="text-gray-800 hover:text-blue-600">Support</a></li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-3xl hover:bg-blue-600 w-full">
            BUY $BOOLSH
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
