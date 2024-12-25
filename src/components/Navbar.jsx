import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-white py-3 px-4 flex items-center justify-between w-full">
      <a className="font-bold text-xl tracking-tight" href="#">My Site</a>
      <div className="flex items-center space-x-4">
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">About</a>
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
