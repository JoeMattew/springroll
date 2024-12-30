import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-900 py-3 px-4 flex items-center w-full">
      {/* Name Tag */}
      <a
        className="font-bold text-xl tracking-tight mx-auto md:mx-0"
        href="#"
      >
        Nem Nướng Huy Nga
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        <a
          className="text-sm px-4 py-2 leading-none hover:bg-gray-900 hover:text-white transition-colors duration-300"
          href="#map-section"
        >
          Tìm chúng tôi
        </a>
        <a
          className="text-sm px-4 py-2 leading-none hover:bg-gray-900 hover:text-white transition-colors duration-300"
          href="#best-choice"
        >
          Lựa chọn tuyệt vời
        </a>
        <a
          className="text-sm px-4 py-2 leading-none hover:bg-gray-900 hover:text-white transition-colors duration-300"
          href="#order-section"
        >
          Giao hàng
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
