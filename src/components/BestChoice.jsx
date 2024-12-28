import React, { useState } from "react";

const BestChoice = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [1, 2];

  const handlePrev = () => {
    setActiveSlide(activeSlide === 1 ? slides.length : activeSlide - 1);
  };

  const handleNext = () => {
    setActiveSlide(activeSlide === slides.length ? 1 : activeSlide + 1);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-extrabold text-white mb-8">
        Tốt nhất mọi thời đại!
      </h2>

      <div className="max-w-5xl w-4/5 h-96 relative">
        {/* Slides */}
        {slides.map((slide) => (
          <div
            key={slide}
            className={`font-bold text-7xl flex items-center justify-center h-full w-full bg-black text-white rounded-lg border border-white transition-opacity duration-300 ${
              activeSlide === slide ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <span className="w-16 text-center">{slide}</span>
            <span className="text-white">/</span>
            <span className="w-16 text-center">{slides.length}</span>
          </div>
        ))}

        {/* Prev/Next Arrows */}
        <div className="absolute inset-0 flex">
          <div className="flex items-center justify-start w-1/2">
            <button
              className="bg-black text-white font-bold border border-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-800 transition-colors"
              onClick={handlePrev}
            >
              &#8592;
            </button>
          </div>
          <div className="flex items-center justify-end w-1/2">
            <button
              className="bg-black text-white font-bold border border-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-800 transition-colors"
              onClick={handleNext}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute w-full flex items-center justify-center px-4">
          {slides.map((slide) => (
            <button
              key={slide}
              className={`w-6 h-6 mt-4 mx-2 rounded-full border border-white transition-colors duration-200 ease-out ${
                activeSlide === slide ? "bg-white" : "bg-black"
              }`}
              onClick={() => setActiveSlide(slide)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestChoice;
