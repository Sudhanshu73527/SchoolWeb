import React, { useState } from "react";
import { motion } from "framer-motion";

const ParentsEnquiry = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    enquiryMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
📌 *Admission Enquiry by Parent*

👨‍👩‍👦 Parent's Name: ${formData.parentName}
👶 Child's Name: ${formData.childName}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
📝 Message: ${formData.enquiryMessage}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "917739692245"; // Replace with your school's number
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 flex flex-col items-center"> <br />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 md:p-10"
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Parent Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Parent's Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Child's Name</label>
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your child's name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter contact number"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Message / Query</label>
            <textarea
              name="enquiryMessage"
              value={formData.enquiryMessage}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border px-4 py-2 rounded"
              placeholder="Ask about admission process, age criteria, fees, etc."
            />
          </div>

          <div className="text-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded font-semi-bold transition hover:bg-white hover:text-orange-500"
            >
              Submit Enquiry
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ParentsEnquiry;
