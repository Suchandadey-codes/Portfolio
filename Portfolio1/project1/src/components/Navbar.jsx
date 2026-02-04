import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          Bioinformatics Portfolio!<p>Solution to real time problems</p>
          </h1>
         
         {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
     
     {/* Navigation Links */}
        <div className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 md:items-center text-lg font-medium`}
        >
          <Link to="/" className="block mt-2 md:mt-0 hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="block mt-2 md:mt-0 hover:text-yellow-300 transition">About</Link>
          <Link to="/research" className="block mt-2 md:mt-0 hover:text-yellow-300 transition">Research</Link>
          <Link to="/projects" className="block mt-2 md:mt-0 hover:text-yellow-300 transition">Projects</Link>
          <Link to="/contact" className="block mt-2 md:mt-0 hover:text-yellow-300 transition">Contact</Link>
        </div>
        
      </div>
      </nav>
  );
};

export default Navbar;



