import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

import sunnyimg from "../../assets/pra1.jpeg";
import avtar from "../../assets/pra2.jpeg";
import avtarimg from "../../assets/pra3.png";
import avtarimg1 from "../../assets/avtar6.png";
import avtarimg2 from "../../assets/avtar7.png";
import avtarimg3 from "../../assets/avtar8.png";

const testimonials = [
  {
    name: "Sujit Kumar",
    role: "Parent's",
    image: sunnyimg,
    rating: 5,
    message: "The faculty here is very helpful and the environment is nurturing.",
  },
  {
    name: "Ranjan Sah",
    role: "Parent's",
    image: avtar,
    rating: 4,
    message: "My daughter has blossomed under the care of this school.",
  },
  {
    name: "Pradeep K Pandey",
    role: "Parent's",
    image: avtarimg,
    rating: 5,
    message: "Great infrastructure and administration at every level.",
  },
  {
    name: "Satish Pandey",
    role: "Parent's",
    image: avtarimg1,
    rating: 5,
    message: "This school laid the foundation for my son's confidence and growth.",
  },
  {
    name: "Manish Tiwari",
    role: "Parent's",
    image: avtarimg2,
    rating: 4,
    message: "The curriculum is very well designed and practical for modern needs.",
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
  autoplaySpeed: 4000,
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

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex justify-center mb-2">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.01 3.11a1 1 0 00.95.69h3.262c.969 0 1.371 1.24.588 1.81l-2.64 1.92a1 1 0 00-.364 1.118l1.01 3.11c.3.921-.755 1.688-1.54 1.118l-2.64-1.92a1 1 0 00-1.176 0l-2.64 1.92c-.784.57-1.838-.197-1.54-1.118l1.01-3.11a1 1 0 00-.364-1.118L2.24 8.537c-.783-.57-.38-1.81.588-1.81h3.262a1 1 0 00.95-.69l1.01-3.11z" />
        </svg>
      ))}
      {halfStar && (
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="gray" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.01 3.11a1 1 0 00.95.69h3.262c.969 0 1.371 1.24.588 1.81l-2.64 1.92a1 1 0 00-.364 1.118l1.01 3.11c.3.921-.755 1.688-1.54 1.118l-2.64-1.92a1 1 0 00-1.176 0l-2.64 1.92c-.784.57-1.838-.197-1.54-1.118l1.01-3.11a1 1 0 00-.364-1.118L2.24 8.537c-.783-.57-.38-1.81.588-1.81h3.262a1 1 0 00.95-.69l1.01-3.11z"
          />
        </svg>
      )}
    </div>
  );
};

const Test = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
        What Parents Say About Us
      </h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-4">
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-orange-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow-md border-2 border-orange-400"
                />
                <FaQuoteLeft className="text-orange-400 text-2xl mb-3" />
                <p className="text-gray-700 text-sm sm:text-base italic mb-4 px-3 line-clamp-4">
                  “{t.message}”
                </p>
                <StarRating rating={t.rating} />
                <h3 className="text-lg font-semibold text-orange-600">{t.name}</h3>
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
