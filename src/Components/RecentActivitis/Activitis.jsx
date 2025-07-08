import React from "react";
import { Link } from "react-router-dom";
import activity1 from "../../assets/art.jpeg";
import activity2 from "../../assets/wha2.jpeg";
import activity3 from "../../assets/wha3.jpeg";
import activity4 from "../../assets/sip.png";

// Utility to create a slug from the title
const createSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

const activities = [
  {
    id: 1,
    image: activity1,
    day: "27",
    month: "MAR",
    year: "2025",
    title: "ART CURATED SHOW",
    description: "Students of Sauhardh displayed artistic excellence in an inspiring showcase.",
  },
  {
    id: 2,
    image: activity2,
    day: "22",
    month: "MAR",
    year: "2025",
    title: "Tree Plantation",
    description: "Sauhardh International School promoted eco-awareness through planting drives.",
  },
  {
    id: 3,
    image: activity3,
    day: "1",
    month: "FEB",
    year: "2025",
    title: "Annual Athletics",
    description: "Students participated in exciting and competitive sports events.",
  },
  {
    id: 4,
    image: activity4,
    day: "30",
    month: "JAN",
    year: "2025",
    title: "Inter House Competition's",
    description: "Showcasing talent and teamwork across houses in various categories.",
  },
];

export default function RecentActivities() {
  return (
    <div className="bg-gradient-to-tr from-orange-50 to-white py-12 px-4">
      <div className="max-w-10xl mx-auto"> <br />
        <h2 className="text-3xl font-bold text-center text-slate-600 mb-10  overflow-x-auto">
RECENT ACTIVITIES
</h2><br />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 text-white font-bold px-3 py-2 rounded text-center">
                    <div className="text-xl leading-none">{activity.day}</div>
                    <div className="text-xs uppercase">
                      {activity.month} {activity.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{activity.description}</p>
                  </div>
                </div>

                <Link
                  to={`/recent-activity/${createSlug(activity.title)}`}
                  className="block w-full text-center mt-3 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
