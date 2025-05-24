import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/bg2.jpeg";

const RequestCertificate = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    className: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmed = window.confirm(
      "Are you sure you want to request a Transfer Certificate?"
    );

    if (!confirmed) return;

    const { studentName, rollNumber, className, reason } = formData;

    const message = `Transfer Certificate Request:%0AStudent Name: ${studentName}%0ARoll Number: ${rollNumber}%0AClass: ${className}%0AReason: ${reason}`;
    const phoneNumber = "917739692245"; // No spaces
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-fixed overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Foreground Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-95 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-orange-500">
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
            <label className="block font-medium">Class</label>
            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>
                Select Class
              </option>
              {[
                "Nursery", "LKG", "UKG",
                "1st", "2nd", "3rd", "4th", "5th",
                "6th", "7th", "8th", "9th", "10th",
                "11th", "12th"
              ].map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Reason for Transfer</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows="3"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Request Certificate
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default RequestCertificate;
