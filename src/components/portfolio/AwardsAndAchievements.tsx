import React from 'react';

// --- Type Definition ---
interface Award {
  id: number;
  title: string;
  issuer: string;
  description: string;
  icon: string; // Emoji
  link?: string;
}

// --- Data from Resume ---
const awardData: Award[] = [
  {
    id: 1,
    title: "JN Tata Endowment Scholar",
    issuer: "Tata Trusts",
    description: "Selected in the top 100 nationally in India for graduate studies abroad.",
    icon: "🏆",
  },
  {
    id: 2,
    title: "IEEE AESS DSTEI Grant",
    issuer: "IEEE AESS",
    description: "Won the $25,000 grant for drone-based smart agriculture; 2 IEEE papers and 1 patent filed.",
    icon: "🚁",
    link: "https://ieee-aess.org/files/ieeeaess/2023-05/AES_Spring23_DSTEI_Davis.pdf",
  },
  {
    id: 3,
    title: "Stellar Hackathon Winner",
    issuer: "Stellar",
    description: "Placed 2nd and won a $3,600 prize for building TryBud.",
    icon: "🥈",
  },
  {
    id: 4,
    title: "Data Stellar Hackathon Finalist",
    issuer: "Barclays",
    description: "Ranked in the top 5 teams in a data-focused hackathon.",
    icon: "🏅",
  },
];

const AwardsAndAchievements = () => {
  return (
    <section id="awards" className="bg-white pt-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awardData.map((award) => (
            <div key={award.id} className="bg-slate-50 rounded-xl p-5 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
              <div className="flex items-start gap-4 h-full">
                <div className="text-3xl flex-shrink-0 mt-1">
                  {award.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800">
                    {award.link ? (
                      <a href={award.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                        {award.title}
                      </a>
                    ) : (
                      award.title
                    )}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-2">{award.issuer}</p>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndAchievements;
