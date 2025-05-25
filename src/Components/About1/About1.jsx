import React from "react";
import aboutImage from "../../assets/bg3.jpeg"; // Replace with your actual image path

const About1 = () => {
  return (
    <section className="bg-white py-16 px-4 relative">
      {/* Top info row for Reg. No and UDISE No */}
      <div className="flex justify-between text-sm text-gray-600 px-6 mb-4 absolute top-4 left-0 right-0">
        <span className="font-medium font-semibold text-orange-400 ">UDISE No: 100111212011</span>
        <span className="font-medium font-semibold text-orange-400 ">Reg. No: 203101420221221152234</span>
      </div>

      <br /> <br />
      <h1 className="text-4xl md:text-5xl font-bold text-slate-600 text-center mb-10 relative">
        <span className="inline-block border-b-4 border-slate-400 pb-2">
          About School
        </span>
      </h1>

      <div className="container mx-auto rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About our school"
            className="rounded-lg shadow-md w-3/4 md:w-[300px] lg:w-[400px] object-cover w-full max-w-xs border border-orange-200"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            Shaping Futures Through Quality Education
          </h2>
          <p className="text-gray-700 text-lg">
            Established in 2015, <strong className="text-orange-600">Sauhardh International School</strong> has grown into a center of
            excellence, dedicated to nurturing young minds for a brighter
            tomorrow. Our mission is to empower students with knowledge,
            character, and confidence to face the challenges of the future. At
            the heart of our philosophy lies a commitment to academic rigor
            balanced with holistic development. We believe that education goes
            beyond textbooks. Our campus buzzes with creativity, sportsmanship,
            leadership activities, and innovation.
          </p>
          <p className="text-gray-600 text-lg">
            With state-of-the-art facilities, passionate educators, and a strong
            community, we aim to create a foundation for lifelong learning and
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About1;
