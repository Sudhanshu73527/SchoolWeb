import React from "react";
import aboutImage from "../../assets/principal.png"; // Replace with your actual image path

const Principal1 = () => {
  return (
    <section className="bg-white py-16 px-4">
      {" "}
      <br /> <br />
      <h1 className="text-4xl md:text-5xl font-bold text-slate-600 text-center mb-10 relative">
        <span className="">
          Principal Message
        </span>
      </h1>
      <div className="container mx-auto rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About our school"
            className="rounded-lg shadow-md w-3/4 md:w-[300px] lg:w-[280px] object-cover w-full max-w-xs border border-orange-200"
          />
        </div>
        <div className="max-w-sm mx-auto mt-20 p-6 bg-orange-500 rounded text-white cursor-pointer">
  <p className="text-2xl font-semibold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis hover:bg-white hover:text-orange-500">
    Mr. Sammer Rai
  </p>
</div>


        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            Shaping Futures Through Quality Education
          </h2>
          <p className="text-gray-700 text-lg">
            Our mission is to provide a nurturing and intellectually stimulating
            environment where every student can thrive. We believe in empowering
            young minds with the knowledge, skills, and values needed to build a
            better tomorrow.
          </p>
          <p className="text-gray-600">
            With state-of-the-art facilities, passionate educators, and a strong
            community, we aim to create a foundation for lifelong learning and
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Principal1;