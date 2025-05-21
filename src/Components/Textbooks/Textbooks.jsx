import React from "react";

const textbooks = [
  { subject: "Alphabet Book", classLevel: "Nursery" },
  { subject: "Phonics Primer", classLevel: "LKG" },
  { subject: "English Basics", classLevel: "UKG" },
  { subject: "Mathematics", classLevel: "Class 1" },
  { subject: "Science", classLevel: "Class 2" },
  { subject: "English", classLevel: "Class 3" },
  { subject: "Hindi", classLevel: "Class 4" },
  { subject: "Environmental Science", classLevel: "Class 5" },
  { subject: "Social Studies", classLevel: "Class 6" },
  { subject: "Computer Science", classLevel: "Class 7" },
  { subject: "General Knowledge", classLevel: "Class 8" },
  { subject: "Science", classLevel: "Class 9" },
  { subject: "Mathematics", classLevel: "Class 10" },
  { subject: "English Grammar", classLevel: "Class 10" },
  { subject: "Social Studies", classLevel: "Class 10" },
  
];

const whatsappNumber = "7352205506";

const Textbooks = () => {
  const handleBuyNow = (subject, classLevel) => {
    const message = `📘 I am interested in buying the textbook:%0A- Subject: ${subject}%0A- Class: ${classLevel}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
        📚 Textbooks
      </h2> <br />

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
  {textbooks.map((book, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {book.subject}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{book.classLevel}</p>
      <button
        onClick={() => handleBuyNow(book.subject, book.classLevel)}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        Buy Now
      </button>
    </div>
  ))}
</div>
    </div>
  );
};

export default Textbooks;
