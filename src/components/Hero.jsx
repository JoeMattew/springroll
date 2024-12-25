import React from 'react';
import dish from '../assets/dish.png';


const Hero = () => {
  return (
    <div className="w-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gray-950">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-100 text-center">
        Chào mừng đến với nhà hàng của chúng tôi!
        </h1>
        <p className="mb-8 leading-relaxed text-gray-100 text-center sm:text-xl">Tại đây, bạn có thể thưởng thức món ăn đặc biệt Bún trộn nem nướng.
        Món ăn này được chế biến theo công thức gia truyền đã được lưu truyền qua nhiều thế hệ.</p>
        
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="Bún trộn nem nướng"
          src={dish}
          
        />
      </div>
    </div>
  );
};

export default Hero;
