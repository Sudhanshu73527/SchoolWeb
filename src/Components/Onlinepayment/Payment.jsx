import React, { useState } from 'react';
import paymentImage from '../../assets/anual.jpeg'; // Adjust path as needed

const Payment = () => {
  const [form, setForm] = useState({
    name: '',
    admission: '',
    classSection: '',
    amount: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, amount } = form;

    const upiId = "schoolupi@oksbi";
    const payeeName = "Delhi Public School";

    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      payeeName
    )}&am=${amount}&cu=INR&tn=${encodeURIComponent(`Fee Payment by ${name}`)}`;

    window.location.href = upiLink;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
         <p className='text-lg font-semi-bold text-orange-500 text-center border rounded-xl'>You can scan the QR Code and pay also </p>
        {/* Top center image */}
        <div className="flex justify-center mb-4">
          <img src={paymentImage} alt="Payment Banner" className="h-70 object-contain" />
        </div>

        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          💳 Online Fee Payment
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Student Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter student full name"
              className="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Admission Number</label>
            <input
              type="text"
              name="admission"
              value={form.admission}
              onChange={handleChange}
              required
              placeholder="Enter admission number"
              className="w-full mt-1 px-4 py-2 border rounded-md "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Class & Section</label>
            <input
              type="text"
              name="classSection"
              value={form.classSection}
              onChange={handleChange}
              required
              placeholder="e.g., 8-B"
              className="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Amount (₹)</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              placeholder="Enter amount"
              className="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
