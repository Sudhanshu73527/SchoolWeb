import React from "react";

// ✅ Import real images from your assets folder
import activity1 from "../../assets/hero.png";
import activity2 from "../../assets/art.jpeg";
import activity3 from "../../assets/rep1.jpeg";
import activity4 from "../../assets/rep2.jpeg";
import activity5 from "../../assets/science1.jpeg";
import activity6 from "../../assets/science2.jpeg";

const activities = [
  {
    title: "Science Fair",
    image: activity1,
    description:
      "Students showcased their creative science projects and models to explain various scientific principles.",
  },
  {
    title: "Art Competition",
    image: activity2,
    description:
      "An inter-school art competition where students expressed themselves through drawing and painting.",
  },
  {
    title: "Sports Day",
    image: activity3,
    description:
      "A fun-filled day of track and field events, teamwork, and sportsmanship for all classes.",
  },
  {
    title: "Yoga Session",
    image: activity4,
    description:
      "A guided yoga and mindfulness session to promote physical and mental well-being.",
  },
  {
    title: "Cultural Program",
    image: activity5,
    description:
      "Dance, music, and drama performances to celebrate cultural diversity and talents of students.",
  },
  {
    title: "Environmental Awareness Rally",
    image: activity6,
    description:
      "A rally organized to raise awareness about climate change and the importance of sustainability.",
  },
];

const Curriculam = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
        🎯 Curriculum Activities
      </h2>{" "}
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <a href={activity.image} target="_blank" rel="noopener noreferrer">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-orange-500">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculam;
