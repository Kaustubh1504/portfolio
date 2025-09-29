import React, { JSX } from 'react';
import { FaUniversity } from "react-icons/fa";

// --- Type Definition ---
interface EducationEntry {
  id: number;
  university: string;
  location: string;
  degree: string;
  dates: string;
  courses: string[];
  icon: JSX.Element;
}

// --- SVG Icon ---
const UniversityIcon = () => (
    <FaUniversity />
);


// --- Data from Resume ---
const educationData: EducationEntry[] = [
  {
    id: 1,
    university: "Northeastern University",
    location: "Boston, USA",
    degree: "Master’s, Computer Science",
    dates: "September 2025 – May 2027",
    courses: ["Algorithms", "Database Management", "Programming Design Paradigm"],
    icon: <UniversityIcon />,
  },
  {
    id: 2,
    university: "University of Mumbai",
    location: "Mumbai, India",
    degree: "Bachelor of Technology, Electronics Engineering",
    dates: "2020 – 2024",
    courses: ["AI and ML", "Cloud Computing", "OOP", "Computer Networks", "Operating Systems"],
    icon: <UniversityIcon />,
  },
];

const Education = () => {
  return (
    <section id="education" className="">
      <div className="max-w-7xl mx-auto pt-3">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 text-blue-500 mt-1">
                  {edu.icon}
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-semibold text-blue-600">{edu.dates}</p>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{edu.university}</h3>
                  <p className="text-md text-gray-600 font-medium">{edu.degree}</p>
                  <p className="text-sm text-gray-500 mb-4">{edu.location}</p>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-700 mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                        {edu.courses.map(course => (
                            <span key={course} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                                {course}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

