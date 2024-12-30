import React from 'react';

const MapSection = () => {
  return (
    <div id="map-section" className="w-full mx-auto flex flex-col md:flex-row px-5 py-24 items-center bg-gray-950">
      {/* Map Section */}
      <div className="lg:w-1/3 md:w-1/2 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4923871036353!2d105.8091924!3d21.0529875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb257e7ce17%3A0x5710e5ede7216bfd!2sNem%20N%C6%B0%E1%BB%9Bng%20Huy%20Nga%20(Grilled%20Spring%20Rolls)!5e0!3m2!1sru!2s!4v1735094694044!5m2!1sru!2s"
          width="100%"
          height="480"
          className="rounded-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 md:w-1/2 w-full flex items-center justify-center mt-8 md:mt-0">
        <div className="text-container text-center"> {/* Center content */}
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-100">
            Chúng tôi rất dễ tìm!
          </h1>
          <p className="leading-relaxed text-gray-100 sm:text-xl">
            Địa chỉ của chúng tôi<br />
            206 Lạc Long Quân Ha Noi, Hanoi City<br />
            Giờ làm việc<br />
            Thứ Hai - Chủ Nhật: 9.00 - 22.00<br />
            Liên hệ với chúng tôi<br />
            Email: ericnguyen.6110@gmail.com<br />
            Phone: 034 352 1909
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
