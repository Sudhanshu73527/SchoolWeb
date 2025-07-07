import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import image1 from "../../assets/chuma1.png";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;

    const whatsappMessage = `Hello,%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email || 'N/A'}%0A*Message:* ${message}`;
    const whatsappURL = `https://wa.me/919523464653?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-purple-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-5xl font-bold text-purple-700 mb-2">Enquire Now</h2>
        <p className="text-gray-600">
          Have questions? Fill in your details and we’ll get in <span text-purple-700>touch shortly</span>.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image + Contact (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col items-center text-left"
        >
          <img
            src={image1}
            alt="Enquiry Illustration"
            className="w-full max-w-lg w-[26rem] mb-6"
          />
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-purple-600" />
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-purple-600" /> info@yourschool.com
            </li>
          </ul>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6 w-full"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Phone"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Email (optional)"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your message or enquiry"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Submit Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default EnquiryForm;
