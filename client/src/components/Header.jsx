import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white p-4">
      <Link to="/" className="text-2xl font-bold">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Ajay Chandan
        </span>
      </Link>
      {/* <Button gradientDuoTone="purpleToBlue">Contact</Button> */}
    </header>
  );
};

export default Header;
