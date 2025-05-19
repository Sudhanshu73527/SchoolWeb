import React from "react";

const textbooks = [
  {
    subject: "Mathematics",
    classLevel: "Class 10",
    link: "#",
  },
  {
    subject: "Science",
    classLevel: "Class 10",
    link: "#",
  },
  {
    subject: "English",
    classLevel: "Class 10",
    link: "#",
  },
  {
    subject: "Social Studies",
    classLevel: "Class 10",
    link: "#",
  },
  {
    subject: "Hindi",
    classLevel: "Class 10",
    link: "#",
  },
  {
    subject: "Computer Science",
    classLevel: "Class 10",
    link: "#",
  },
  {
    subject: "General Knowledge",
    classLevel: "Class 9",
    link: "#",
  },
  {
    subject: "Environmental Science",
    classLevel: "Class 8",
    link: "#",
  },
   {
    subject: "General Knowledge",
    classLevel: "Class 9",
    link: "#",
  },
  {
    subject: "Environmental Science",
    classLevel: "Class 8",
    link: "#",
  },
   {
    subject: "General Knowledge",
    classLevel: "Class 9",
    link: "#",
  },
  {
    subject: "Environmental Science",
    classLevel: "Class 8",
    link: "#",
  },
   {
    subject: "General Knowledge",
    classLevel: "Class 9",
    link: "#",
  },
  {
    subject: "Environmental Science",
    classLevel: "Class 8",
    link: "#",
  },
  {
    subject: "Environmental Science",
    classLevel: "Class 8",
    link: "#",
  },
];

const Textbooks = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
        📚 Textbooks
      </h2> <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {textbooks.map((book, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {book.subject}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{book.classLevel}</p>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              View / Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Textbooks;
