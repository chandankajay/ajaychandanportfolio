import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="flex flex-col space-y-2 mt-4">
      <Link to='/' className='text-lg font-semibold hover:text-gray-300'>Home</Link>
      <Link to='/about' className='text-lg font-semibold hover:text-gray-300'>About</Link>
      <Link to='/projects' className='text-lg font-semibold hover:text-gray-300'>Projects</Link>
      <Link to='/dashboard' className='text-lg font-semibold hover:text-gray-300'>Dashboard</Link>
      <Link to='/sign-in' className='text-lg font-semibold hover:text-gray-300'>Sign In</Link>
      <Link to='/sign-up' className='text-lg font-semibold hover:text-gray-300'>Sign Up</Link>
      <Link to='/search' className='text-lg font-semibold hover:text-gray-300'>Search</Link>
    </nav>
  );
};

export default Menu;
