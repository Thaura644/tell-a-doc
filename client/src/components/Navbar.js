import React from "react";
import { Link } from 'react-router-dom';
import './NavbarStyles.css'

function Navbar (){
 
  return (
    <>
    
    <nav className="bg-gray-800">
      <ul>
        <li><Link to="/">Expert Care</Link></li>
        <li><Link to="/for-individual">For Individual</Link></li>
        <li><Link to="/for-organisation">For Organisation</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
  
 
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold">Logo</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
     
      </>
    )

  
}

export default Navbar;

