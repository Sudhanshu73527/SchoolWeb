import React from "react";
import aboutImage from "../../assets/principal.png"; // Replace with your actual image path

const Principal1 = () => {
  return (
    <section className="bg-white py-16 px-4">
      {" "}
      <br /> <br />
      <h1 className="text-4xl md:text-5xl font-bold text-slate-600 text-center mb-10 relative">
        <span className="">Principal's Message</span>
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
        {/* <div className="max-w-sm mx-auto mt-20 p-6 bg-orange-500 rounded text-white cursor-pointer">
          <p className="text-2xl font-semibold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis hover:bg-white hover:text-orange-500">
            Mr. Sameer Rai
          </p>
        </div> */}

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            Learning Today, Leading Tomorrow
          </h2>
          <p className="text-gray-700 text-lg">
            Dear Students, Parents, and Esteemed Members of the School
            Community, At <strong className="text-orange-600">Sauhardh International School</strong> we believe that true education nurtures
            both the mind and character. Our goal is to create an environment
            where students grow intellectually, emotionally, and ethically. We
            are proud of our dedicated teachers who guide each child with care
            and commitment and grateful to our parents for their unwavering
            support. Together, let us continue to inspire, innovate, and ignite
            a lifelong love for learning. Warm regards, <strong>Mr.Sameer Rai</strong> Principal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Principal1;
