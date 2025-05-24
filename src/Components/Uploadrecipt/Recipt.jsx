import React, { useState } from 'react';

const Recipt = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
         const message = encodeURIComponent("Hello, I've uploaded my payment receipt.");
    const whatsappNumber = "917739692245"; // Replace with your number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
      // Simulate upload (you can replace with actual upload logic)
      alert(`Uploaded: ${file.name}`);
    } else {
      alert('Please select a file before submitting.');
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-orange-500">
          Upload Payment Receipt
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Select Screenshot or PDF
            </label>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Upload
          </button>
          {file && (
            <p className="text-sm text-green-600 mt-2">Selected: {file.name}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Recipt;
