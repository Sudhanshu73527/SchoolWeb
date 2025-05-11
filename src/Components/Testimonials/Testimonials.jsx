import React, { useState } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";

const testimonialsData = [
  {
    name: "Sunny Tiwari",
    school: "Saurdh International School",
    image: user_1,
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, animi."
  },
  {
    name: "Riya Sharma",
    school: "Green Valley Public School",
    image: user_1,
    message: "Amazing teachers and supportive staff. I gained a lot of confidence here!"
  },
  {
    name: "Amit Verma",
    school: "Modern High School",
    image: user_1,
    message: "The environment here encouraged me to learn and explore beyond books."
  },
  {
    name: "Sneha Kapoor",
    school: "Bright Future Academy",
    image: user_1,
    message: "Every day felt like a new opportunity to grow and discover."
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(testimonialsData.length / 2);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Get 2 testimonials for current slide
  const visibleTestimonials = testimonialsData.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
    <div className="w-full py-12 bg-orange-50">
      <div className="text-center mb-8 px-4">
        <p className="text-slate-600 text-sm font-semibold tracking-wide uppercase">Testimonials</p>
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-600 mt-2 mb-4">What our students say</h2> <br />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-lg">
          {/* Back Button */}
          <button onClick={prevSlide} className="p-3 rounded-full">
            <img src={back_icon} alt="Back" className="w-8 h-8 rounded-full bg-blue-700" />
          </button>

          {/* Testimonials Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={index} className="border border-orange-100 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-white">
                <div className="flex items-center gap-4 mb-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500">{testimonial.school}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-base leading-relaxed italic">
                  “{testimonial.message}”
                </p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button onClick={nextSlide} className="p-3 rounded-full">
            <img src={next_icon} alt="Next" className="w-8 h-8 rounded-full bg-blue-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
