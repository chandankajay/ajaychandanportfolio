import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col space-y-2 mt-4">
      <Link to='/' className={`text-lg p-1 font-semibold hover:text-gray-300 ${
          location.pathname === '/' ? 'text-gray-800 bg-white rounded-lg' : 'text-white'}`}>Home</Link>
      <Link to='/thylearning' className={`text-lg p-1 font-semibold hover:text-gray-300 ${
          location.pathname === '/thylearning' ? 'text-gray-800 bg-white rounded-lg' : 'text-white'
        }`}>Thy Learning</Link>
      {/* <Link to='/about' className='text-lg font-semibold hover:text-gray-300'>About</Link>
      <Link to='/projects' className='text-lg font-semibold hover:text-gray-300'>Projects</Link>
      <Link to='/dashboard' className='text-lg font-semibold hover:text-gray-300'>Dashboard</Link>
      <Link to='/sign-in' className='text-lg font-semibold hover:text-gray-300'>Sign In</Link>
      <Link to='/sign-up' className='text-lg font-semibold hover:text-gray-300'>Sign Up</Link>
      <Link to='/search' className='text-lg font-semibold hover:text-gray-300'>Search</Link> */}
    </nav>
  );
};

export default Menu;
