import React, { useState } from "react";
import { motion } from "framer-motion";

const Feedbackform = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "Parent",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, role, email, message } = formData;
    const whatsappNumber = "7739692245"; 

    const whatsappMessage = `Feedback Form Submission:%0A👤 Name: ${name}%0A🎓 Role: ${role}%0A📧 Email: ${email}%0A📝 Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
    setFormData({ name: "", role: "Parent", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-12 px-4">
      <motion.h2
        className="text-3xl font-bold text-orange-500 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📝 Feedback Form
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl space-y-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
          >
            <option value="Parent">Parent</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className="w-full px-4 py-2 border rounded "
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Write your feedback here..."
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Submit Feedback
        </button>
      </motion.form>
    </div>
  );
};

export default Feedbackform;
