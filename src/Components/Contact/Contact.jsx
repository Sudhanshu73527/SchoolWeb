import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '7739692245';  
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${message}`
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <div className="pt-10 pb-4 px-4">
        <h1 className='text-3xl text-center font-bold text-orange-500 mb-8'>Explain Your Query</h1>
      </div>
      
      <div className="min-h-screen bg-orange-50 flex items-center justify-center px-6 py-12 sm:px-10 lg:px-20">
        <div className="w-full max-w-2xl bg-white p-10 sm:p-12 rounded-2xl shadow-xl border border-orange-200">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
          
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your query..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semi-bold px-8 py-3 rounded-lg shadow-lg transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
