import React from "react";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const circulars = [
  {
    title: "Annual Sports Day Notification",
    date: "May 15, 2025",
    description: "Details regarding the Annual Sports Day including schedule and dress code.",
    fileUrl: "#",
  },
  {
    title: "Summer Vacation Circular",
    date: "May 5, 2025",
    description: "Dates for summer holidays and reopening information.",
    fileUrl: "#",
  },
  {
    title: "Parent-Teacher Meeting Notice",
    date: "April 28, 2025",
    description: "Schedule for the upcoming PTM for classes 1 to 10.",
    fileUrl: "#",
  },
];

const Schoolcircular = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
        📝 School Circulars
      </h2>

      <div className="w-full max-w-4xl space-y-6">
        {circulars.map((circular, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {circular.title}
              </h3>
              <span className="text-sm text-gray-500">{circular.date}</span>
            </div>
            <p className="text-gray-700 mb-4">{circular.description}</p>
            <a
              href={circular.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
              onClick={()=>navigate("/circular")}
            >
              <FileText size={18}/>
              View Circular
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schoolcircular;
