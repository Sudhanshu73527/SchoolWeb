import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sunnyimg from "../../assets/avtar8.png"
import avtar from "../../assets/avtar1.jpg"
import avtarimg from "../../assets/avtar2.jpg"
import avtarimg1 from "../../assets/avtar6.png"
import avtarimg2 from "../../assets/avtar7.png"
import avtarimg3 from "../../assets/avtar8.png"

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Parent's",
    image: sunnyimg,
    rating: 5,
    message: "The faculty here is very helpful and the environment",
  },
  {
    name: "Mohan Sharma",
    role: "Parent's",
    image: avtar,
    rating: 4,
    message: "My daughter has blossomed under the care of this.",
  },
  {
    name: "Rahul Verma",
    role: "Parent's",
    image: avtarimg,
    rating: 3,
    message: "Great infrastructure and administration.",
  },
  {
    name: "Satish Pandey",
    role: "Parent's",
    image: avtarimg1,
    rating: 5,
    message: "This school laid the foundation for my career .",
  },
  {
    name: "Manish Tiwari",
    role: "Parent's",
    image: avtarimg2,
    rating: 4,
    message: "The curriculum is very well designed and practical.",
  },
  {
    name: "Aisha Qureshi",
    role: "Parent's",
    image: avtarimg3,
    rating: 3.5,
    message: "The co-curricular activities are fun and enriching!",
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
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Test = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 "><br />
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">What Parents Say's About Us</h2>
      <div className="max-w-10xl mx-auto px-2 sm:px-6">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center h-full flex flex-col items-center transition-all duration-500 hover:shadow-xl border border-orange-200 ">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4 text-sm">“{t.message}”</p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.01 3.11a1 1 0 00.95.69h3.262c.969 0 1.371 1.24.588 1.81l-2.64 1.92a1 1 0 00-.364 1.118l1.01 3.11c.3.921-.755 1.688-1.54 1.118l-2.64-1.92a1 1 0 00-1.176 0l-2.64 1.92c-.784.57-1.838-.197-1.54-1.118l1.01-3.11a1 1 0 00-.364-1.118L2.24 8.537c-.783-.57-.38-1.81.588-1.81h3.262a1 1 0 00.95-.69l1.01-3.11z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-orange-500">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Test;
