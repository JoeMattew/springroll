import React from 'react';

const MapSection = () => {
  return (
    <section className="bg-gray-950">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white">Chúng tôi rất dễ tìm!</h2>
         
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4923871036353!2d105.8091924!3d21.0529875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb257e7ce17%3A0x5710e5ede7216bfd!2sNem%20N%C6%B0%E1%BB%9Bng%20Huy%20Nga%20(Grilled%20Spring%20Rolls)!5e0!3m2!1sru!2s!4v1735094694044!5m2!1sru!2s" 
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
            {/* Information Section */}
            <div>
              <InfoCard
                title="Địa chỉ của chúng tôi"
                content={["206 Lạc Long Quân Ha Noi, Hanoi City"]}
              />
              <InfoCard
                title="Giờ làm việc"
                content={[
                  "Thứ Hai - Chủ Nhật: 9.00 - 22.00"
                ]}
              />
              <InfoCard
                title="Liên hệ với chúng tôi"
                content={[
                  "Email: ericnguyen.6110@gmail.com",
                  "Phone: 034 352 1909",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable InfoCard Component
const InfoCard = ({ title, content }) => {
  return (
    <div className="border-t border-gray-200 px-6 py-4">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      {content.map((item, index) => (
        <p key={index} className="mt-1 text-white">
          {item}
        </p>
      ))}
    </div>
  );
};

export default MapSection;
