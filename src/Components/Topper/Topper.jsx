import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sunnyimg from "../../assets/sip1.png";
import raviimg from "../../assets/sip2.png";
import lawimg from "../../assets/sip3.png";
import kushimg from "../../assets/sip4.png";
import topper1 from "../../assets/top1.png";
import topper2 from "../../assets/top2.png";
import topper3 from "../../assets/top3.png";
import topper4 from "../../assets/top4.png";

const toppers = [
  { name: "Lav Kumar Gupta", role: "Class 4th Topper", image: lawimg },
  { name: "Kush Kumar Gupta", role: "Class 4th Topper", image: kushimg },
  { name: "Pulkit Kumar Pandey", role: "Class UKG Topper", image: raviimg },
  { name: "Piyush Kumar Pandey", role: "Class 3rd Topper", image: sunnyimg },
  { name: "Varsha Kumari", role: "Class 2 Topper", image: topper1 },
  { name: "Shayam Kumar", role: "Class 5 Topper", image: topper2 },
  { name: "Rahul Kumar", role: "Class 5 Topper", image: topper3 },
  { name: "Anshu Kumari", role: "Class 5 Topper", image: topper4 },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Topper = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-10 px-4 md:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-10 sm:mb-14">
          Meet Our Class Toppers
        </h2> <br />

        <Slider {...settings}>
          {toppers.map((t, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center border border-orange-100 hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 relative">
                {/* Badge */}
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold">
                  🏆 Topper
                </span>

                {/* Image */}
                <div className="flex items-center justify-center mb-4">
  <div className="w-32 h-32 sm:w-40 sm:h-40">
    <img
      src={t.image}
      alt={t.name}
      className="w-full h-full object-cover rounded-full border-4 border-orange-300 shadow-md"
    />
  </div>
</div>


                {/* Text */}
                <h3 className="text-lg sm:text-xl font-bold text-orange-600">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Topper;
