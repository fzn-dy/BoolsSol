import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#FFF0D1] text-gray-800 shadow-xl rounded-full z-20 px-8 py-2 lg:py-4 border-2 border-black w-[90%] max-w-screen-2xl">
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center w-auto h-[80%]">
            <img
              src="assets/boolsh_black.png"
              alt="Logo"
              className="h-6 md:h-[2rem] lg:h-[3rem] mr-6"
            />
          </Link>
        </div>

        {/* Hamburger Icon for mobile/tablet */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links - visible on large screens */}
        <ul className="hidden lg:flex lg:space-x-6 xl:space-x-8">
          <li>
            <NavLink
              to="/"
              className="font-extrabold text-3xl text-gray-800 hover:text-blue-600"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#about"
              className="font-extrabold text-3xl text-gray-800 hover:text-blue-600"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#tokenomics"
              className="font-extrabold text-3xl text-gray-800 hover:text-blue-600"
            >
              TOKENOMICS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#partnership"
              className="font-extrabold text-3xl text-gray-800 hover:text-blue-600"
            >
              PARTNERSHIP
            </NavLink>
          </li>
        </ul>

        {/* Right Button - visible on large screens */}
        <Link
          to="https://t.me/bulonsolana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden lg:block text-md lg:text-2xl font-bold hover:scale-105 transform transition-transform text-white px-6 py-2 lg:py-3 rounded-full bg-gradient-to-r from-violet-500 to-emerald-300 hover:bg-[#505aa0] shadow-xl border-2 border-black">
            Join Community
          </button>
        </Link>
      </div>

      {/* Mobile Menu - will only show when hamburger is clicked */}
      {isOpen && (
        <div className="lg:hidden mt-4 absolute top-14 left-1/2 transform -translate-x-1/2 bg-[#FFF0D1] rounded-lg shadow-md w-[90%] py-4 z-30">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <NavLink
                to="/"
                className="font-extrabold text-lg text-gray-800 hover:text-blue-600"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#about"
                className="font-extrabold text-lg text-gray-800 hover:text-blue-600"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#tokenomics"
                className="font-extrabold text-lg text-gray-800 hover:text-blue-600"
              >
                TOKENOMICS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#partnership"
                className="font-extrabold text-lg text-gray-800 hover:text-blue-600"
              >
                PARTNERSHIP
              </NavLink>
            </li>
          </ul>
          <Link
            to="https://t.me/bulonsolana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <button className=" mt-4 bg-gradient-to-r from-violet-500 to-emerald-300 hover:scale-105 border-2 border-black text-white px-6 py-2 rounded-3xl hover:bg-blue-600 w-AUTO">
              Join Community
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
