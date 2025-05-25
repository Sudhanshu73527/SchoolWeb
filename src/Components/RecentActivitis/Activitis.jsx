import React from "react";

import activity1 from "../../assets/art.jpeg";
import activity2 from "../../assets/wha2.jpeg";
import activity3 from "../../assets/wha3.jpeg";
import activity4 from "../../assets/sip.png";

const activities = [
  {
    id: 1,
    image: activity1,
    day: "27",
    month: "MAR",
    year: "2025",
    title: "ART CURATED SHOW",
    description: "Students of Sauhardh ...",
  },
  {
    id: 2,
    image: activity2,
    day: "22",
    month: "MAR",
    year: "2025",
    title: "Tree Plantation",
    description: "Sauhardh international School...",
  },
  {
    id: 3,
    image: activity3,
    day: "1",
    month: "FEB",
    year: "2025",
    title: "Annual Athletics",
    description: "Students of Sauhardh ...",
  },
  {
    id: 4,
    image: activity4,
    day: "30",
    month: "JAN",
    year: "2025",
    title: "Inter house Competition's",
    description: "Students of Sauhardh...",
  },
];

export default function RecentActivities() {
  return (
    <div className="bg-gray-100 py-6 px-4"> <br />
      <div className="max-w-10xl mx-auto">
        <div className="text-center bg-orange-500 text-white py-3 text-2xl font-semibold rounded-xl">
          🏆 RECENT ACTIVITIES
        </div><br />
        <div className="grid gap-6 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded shadow flex flex-col overflow-hidden"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover border border-orange-300 text-center"
              />
              <div className="flex items-start px-4 py-2 space-x-3 border border-orange-600">
                <div className="bg-orange-500 text-white text-center px-3 py-2 font-bold rounded-sm border">
                  <div className="text-xl">{activity.day}</div>
                  <div className="text-xs">
                    {activity.month} {activity.year}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm truncate w-40 text-center">
                    {activity.title}
                  </div>
                  <div className="text-sm text-gray-600 mt-1 truncate text-center">
                    {activity.description}
                  </div>
                </div>
              </div>
              <button className="text-orange-500 bg-slate-700 font-semibold text-center py-2 border-t border-gray-200 hover:underline cursor-pointer">
                 
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
