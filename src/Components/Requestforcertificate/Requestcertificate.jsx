import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/bg2.jpeg'; // Adjust the path as needed

const Requestcertificate = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, rollNumber, reason } = formData;
    const message = `Transfer Certificate Request:%0AStudent Name: ${studentName}%0ARoll Number: ${rollNumber}%0AReason: ${reason}`;
    const phoneNumber = '917352205506'; // Use country code
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-6 max-w-md w-full bg-white bg-opacity-90 rounded-xl shadow-md space-y-6"
      >
        <h2 className="text-xl font-bold text-center text-orange-500">
          Transfer Certificate Request
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">class</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Reason for Transfer</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Requestcertificate;
