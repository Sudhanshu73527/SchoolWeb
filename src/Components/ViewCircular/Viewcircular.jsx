import React from 'react';
import circularImg from '../../assets/bg1.jpeg';

const Viewcircular = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl p-6 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">School Circular</h2>
        <p className="text-lg text-gray-700 mb-6">
          Stay updated with the latest announcements and notifications from the school.
        </p>
        <div className="flex justify-center">
          <a href={circularImg} target="_blank" rel="noopener noreferrer">
            <img
              src={circularImg}
              alt="School Circular"
              className="w-150 h-130 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-90 transition-transform border border-orange-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Viewcircular;
