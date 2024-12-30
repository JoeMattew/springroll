import React from 'react';
import deliver from '../assets/deliver.jpg';

const Order = () => {
  return (
    <div id="order-section" className="w-full mx-auto flex flex-col md:flex-row px-5 py-24 items-center bg-gray-950 space-y-12 md:space-y-0 md:space-x-12">
      {/* Image Section */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center">
        <div
          className="relative rounded-lg overflow-hidden"
          style={{
            boxShadow: "0 0 30px 30px rgba(0, 0, 0, 0.9)", // Smooth blur effect around the image
            borderRadius: "12px", // Slightly rounded corners
          }}
        >
          <img
            className="object-cover object-center"
            alt="Bún Trộn Ngon Nhất Hà Nội"
            src={deliver}
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))", // Subtle glow effect
            }}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 md:w-1/2 w-full flex items-center justify-center">
        <div className="text-container text-center"> {/* Center content */}
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-100">
            Đặt hàng ngay hôm nay!
          </h1>
          <p className="leading-relaxed text-gray-100 sm:text-xl mb-8">
            Hãy thưởng thức những món ăn Việt Nam ngon nhất từ nhà hàng của chúng tôi. 
            Chúng tôi cam kết mang đến cho bạn món ăn tươi ngon, đậm đà hương vị truyền thống, 
            được giao nhanh đến tận nhà bạn. Đặt hàng ngay để thưởng thức!
          </p>
          <a
            href="tel:0343521909"
            className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Gọi để đặt hàng
          </a>
        </div>
      </div>
    </div>
  );
};

export default Order;
