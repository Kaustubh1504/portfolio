import React from 'react';

// --- Type Definition ---
interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  type: 'Paper' | 'Patent';
  url: string;
  badgeColor: string;
}

// --- Updated Publication Data ---
const publicationData: Publication[] = [
  {
    id: 1,
    title: "Enhanced Detection of Maize Leaf Blight in Dynamic Field Conditions Using Modified YOLOv9",
    authors: ["Kaustubh Gharat", "H. Jogi", "K. Gode", "K. Talele", "S. Kulkarni", "M. H. Kolekar"],
    venue: "2024 IEEE Space, Aerospace and Defence Conference (SPACE), Bangalore, India",
    date: "2024",
    type: 'Paper',
    url: "#",
    badgeColor: 'blue',
  },
  {
    id: 2,
    title: "Multi-Stage UAV-Based System for Scalable and Accurate Crop Health Monitoring",
    authors: ["Kaustubh Gharat", "et al."],
    venue: "2024 IEEE Space, Aerospace and Defence Conference (SPACE), Bangalore, India",
    date: "2024",
    type: 'Paper',
    url: "#",
    badgeColor: 'blue',
  },
  {
    id: 3,
    title: "Automated Crop Health Monitoring System using Unmanned Aerial Vehicle",
    authors: ["Kaustubh Gharat", "H. Jogi", "K. Gode", "K. Talele", "S. Kulkarni", "M. H. Kolekar"],
    venue: "Indian Patent Office, App No: 202421043217",
    date: "Filed June 4, 2024 | Issued July 26, 2024",
    type: 'Patent',
    url: "#",
    badgeColor: 'green',
  },
];

const badgeColorVariants: { [key: string]: { bg: string, text: string, border: string } } = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-500' },
    green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-500' },
};


const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125-1.125h-4.5A1.125 1.125 0 019 10.5z" /></svg>;

const Publications = () => {
  return (
    <section id="publications" className="pt-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {publicationData.map((item) => {
            const colors = badgeColorVariants[item.badgeColor];
            return (
              <div key={item.id} className={`bg-white rounded-lg overflow-hidden shadow-md border-l-4 ${colors.border} transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
                <div className="p-4">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start">
                    <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-3">
                            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                                {item.type}
                            </span>
                            <p className="text-sm text-gray-500 font-medium">{item.date}</p>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-1 italic">
                        {item.authors.join(', ')}
                        </p>
                        <p className="text-sm text-gray-500">
                        {item.venue}
                        </p>
                    </div>
                    <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-6">
                        <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
                        >
                        Read More
                        <LinkIcon />
                        </a>
                    </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;

