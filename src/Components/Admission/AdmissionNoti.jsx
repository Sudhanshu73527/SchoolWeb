import React from "react";

const notifications = [
  {
    title: "Admissions Open for 2025–2026 Academic Year",
    description: "Admissions are now open for Nursery to Grade 10. Limited seats available!",
    date: "May 18, 2025",
    type: "info",
  },
  {
    title: "Entrance Exam Schedule Released",
    description: "Not Released",
    date: "May 15, 2025",
    type: "important",
  },
  {
    title: "Scholarship Application Deadline",
    description: "Last date to apply for scholarships is June 1, 2025.",
    date: "May 12, 2025",
    type: "alert",
  },
];

const getBadgeColor = (type) => {
  switch (type) {
    case "info": return "bg-blue-100 text-blue-700";
    case "important": return "bg-yellow-100 text-yellow-800";
    case "alert": return "bg-red-100 text-red-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

const AdmissionNoti = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Admission Notifications
        </h2>

        {notifications.map((noti, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{noti.title}</h3>
              <span className={`text-sm px-2 py-1 rounded-full ${getBadgeColor(noti.type)}`}>
                {noti.type.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-600">{noti.description}</p>
            <p className="text-sm text-gray-400 mt-2">📅 {noti.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionNoti;



    // description: "Entrance exam for new admissions will be held on June 10, 2025 at 10 AM.",
