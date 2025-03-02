import React, { useState, useEffect } from "react";
import Logo from "../assets/baang.svg";
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown menu when clicking outside
  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#ECDFD0] z-50" style={{ height: "70px" }}>
      <div className="navbar text-lg w-full h-full">
        <div className="flex-1 flex items-center h-full">
          <Link to="/" className="btn btn-ghost normal-case flex items-center leading-none hover:bg-transparent p-0" style={{ padding: "0px" }}>
            <img src={Logo} alt="Logo" className="h-10 w-36 md:h-14 md:w-60 object-contain mt-0" />
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown lg:hidden relative">
            <button
              onClick={toggleDropdown}
              className="btn btn-ghost p-1" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-8 6h8"
                />
              </svg>
            </button>
            {isOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 absolute right-0 p-2 shadow-md w-40">
                <li><Link to="/" className="hover:bg-transparent hover:text-customBlue font-serif">Home</Link></li>
                <li><Link to="/about" className="hover:bg-transparent hover:text-customBlue font-serif">About</Link></li>
                <li><Link to="/how-it-works" className="hover:bg-transparent hover:text-customBlue font-serif">How it works</Link></li>
                <li><Link to="/contact-us" className="hover:bg-transparent hover:text-customBlue font-serif">Contact Us</Link></li>
                <li>
                  <Link to="/register" className="hover:bg-transparent">
                    <button className="btn bg-blue-600 hover:bg-transparent border-none">Register</button>
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <ul className="menu menu-horizontal px-1 text-lg font-thin hidden lg:flex items-center justify-center">
            <li><Link to="/" className="hover:bg-transparent hover:text-customBlue font-robotic">Home</Link></li>
            <li><Link to="/about" className="hover:bg-transparent hover:text-customBlue font-serif">About</Link></li>
            <li><Link to="/how-it-works" className="hover:bg-transparent hover:text-customBlue font-serif">How it works</Link></li>
            <li><Link to="/contact-us" className="hover:bg-transparent hover:text-customBlue font-serif">Contact Us</Link></li>
            <li>
              <Link to="/register" className="hover:bg-transparent">
                <button className="btn bg-blue-600 hover:bg-transparent border-none">Register</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
