import React, { useState } from "react";
import { motion } from "framer-motion";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    studentClass: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*🎓 Admission Enquiry Form*
👤 Name: ${formData.name}
🎂 DOB: ${formData.dob}
🏫 Class: ${formData.studentClass}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🏠 Address: ${formData.address}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "7352205506"; // Replace with your WhatsApp number (no +, include country code)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 flex flex-col items-center"> <br />
      
      {/* 🎉 Offer Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-md mb-10 shadow max-w-2xl w-full text-center"
      >
        <h3 className="text-xl font-bold">🎉 Limited Time Offer!</h3>
        <p>
          Apply before <strong>June 15, 2025</strong> and get a{" "}
          <span className="text-red-600 font-semibold">20% discount</span> on admission fees for Nursery to Grade 5!
        </p>
      </motion.div>
    <br />
      {/* 📄 Admission Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 md:p-10"
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Student Admission Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter student's full name"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block mb-1 font-medium">Class Applying For</label>
            <select
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            >
              <option value="">Select Class</option>
              {["Nursery", "LKG", "UKG", ...Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)].map((cls, idx) => (
                <option key={idx} value={cls}>{cls}</option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Parent's Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email address"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your full address"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded font-semi-bold hover:bg-orange-600 transition hover:bg-white hover:text-orange-500"
            >
              Submit Admission Form 
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdmissionForm;
