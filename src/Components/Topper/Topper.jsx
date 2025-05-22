import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sunnyimg from "../../assets/sip1.png"
import raviimg from "../../assets/sip2.png"
import lawimg from "../../assets/sip3.png"
import kushimg from "../../assets/sip4.png"


const toppers = [
  {
    name: "Lav Kumar Gupta",
    role: "Class 4th Topper",
    image: lawimg,
  },
  {
    name: "Kush Kumar Gupta",
    role: "Class 4th Topper",
    image: kushimg,
  },
  {
    name: "Pulkit kumar pandey",
    role: "Class UKG Topper",
    image: raviimg,
  },
  {
    name: "Piyush Kumar Pandey",
    role: "Class 3rd Topper",
    image: sunnyimg,
  },
  {
    name: "Manish Tiwari",
    role: "Class 6 Topper",
    image: sunnyimg ,
  },
  {
    name: "Aisha Qureshi",
    role: "Class 5 Topper",
    image: raviimg,
  },
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
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Topper = () => {
  return (
    <div className="bg-gray-100 py-10 px-4"> <br />
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
        Meet Our Class Toppers
      </h2>
      <div className="max-w-10xl mx-auto px-2 sm:px-6">
        <Slider {...settings}>
          {toppers.map((t, index) => (
            <div key={index} className="px-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center h-full flex flex-col items-center border border-orange-200 hover:shadow-xl transition-all duration-500">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-4 shadow-md"
                />
                <h3 className="text-xl font-semibold text-orange-500">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Topper;
