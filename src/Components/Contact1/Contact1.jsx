import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "917739692245"; // Use your WhatsApp number in international format without '+' or dashes

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message
    const text = `Hello! I am ${formData.name}. 
Email: ${formData.email}
Message: ${formData.message}`;

    // Encode the message
    const encodedText = encodeURIComponent(text);

    // WhatsApp URL
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(url, "_blank");
  };

  return (
    <>
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-16">
      <motion.h2
        className="text-3xl font-bold text-orange-500 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📞 Get in Touch With Us
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <input
          type="text"
          name="name"
          placeholder="👤 Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder="📧 Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="💬 Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          🚀 Send Message
        </button>
      </motion.form>
    </div>
    </>
  );
};

export default Contact1;
