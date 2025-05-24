import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jobBg from "../../assets/hero.png"; // Add your image here

const JobVacancy = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, position } = formData;
    const message = `Job Application%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Position:* ${position}`;
    const whatsappURL = `https://wa.me/7352205506?text=${message}`;
    window.location.href = whatsappURL;
  };

  if (!showForm) return null;

  return (
    <>
    <marquee behavior="" direction="left" className="text-xl text-orange-500 font-semibold">No Requirment any teacher Right now </marquee>
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-6 md:p-10 relative"
      >
        {/* Close Icon */}
        <button
  onClick={() => navigate("/")}
  className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-red-500 text-xl z-50"
  aria-label="Close form"
>
  <X size={24} />
</button>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8">
          Job Vacancy Application
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Position Applying For</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            >
              <option value="">Select a position</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin Staff">Admin Staff</option>
              <option value="Coordinator">Coordinator</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Resume (PDF only)</label>
            <input
              type="file"
              accept=".pdf"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-100 file:text-blue-700"
            />
          </div> <br />

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white font-semi-bold px-6 py-3 rounded shadow-md hover:bg-white hover:text-orange-500 transition-all"
              type="submit"
            >
              Submit Application
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
    </>
  );
};

export default JobVacancy;
