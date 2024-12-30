import React, { useState } from "react";
import dish1 from "../assets/dish1.jpg"; // Adjust the path as needed
import dish2 from "../assets/dish2.jpg"; // Adjust the path as needed

const BestChoice = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [
    { id: 1, image: dish1, alt: "Nem Nướng Ngon Nhất Hà Nội" }, // First dish with phrase
    { id: 2, image: dish2, alt: "Bún Trộn Ngon Nhất Hà Nội" },  // Second dish with phrase
  ];

  const handlePrev = () => {
    setActiveSlide(activeSlide === 1 ? slides.length : activeSlide - 1);
  };

  const handleNext = () => {
    setActiveSlide(activeSlide === slides.length ? 1 : activeSlide + 1);
  };

  return (
    <div id="best-choice" className="w-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gray-950">
      {/* Text Section */}
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="text-container text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-100 text-center">
            Tốt nhất mọi thời đại!
          </h1>
          <p className="mb-8 leading-relaxed text-gray-100 text-center sm:text-xl">
            Chúng tôi tự hào mang đến những món ăn ngon nhất được yêu thích mọi thời đại.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
        <div className="relative h-96 w-full rounded-lg border border-white overflow-hidden">
          {/* Slides */}
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.alt}  // Using the alt text from the slide data
              className={`object-cover object-center h-full w-full rounded-lg transition-opacity duration-300 ${
                activeSlide === slide.id ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          ))}

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              type="button"
              className="bg-black text-white font-bold border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition-colors"
              onClick={handlePrev}
            >
              &#8592;
            </button>
            <button
              type="button"
              className="bg-black text-white font-bold border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition-colors"
              onClick={handleNext}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-4">
          {slides.map((slide) => (
            <button
              key={slide.id}
              type="button"
              className={`w-4 h-4 mx-2 rounded-full border border-white transition-colors duration-200 ease-out ${
                activeSlide === slide.id ? "bg-white" : "bg-gray-800"
              }`}
              onClick={() => setActiveSlide(slide.id)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestChoice;
