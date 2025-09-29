import React from 'react';

// --- Type Definition ---
interface Award {
  id: number;
  title: string;
  issuer: string;
  description: string;
  icon: string; // Emoji
}

// --- Data from Resume ---
const awardData: Award[] = [
  {
    id: 1,
    title: "JN Tata Endowment Scholar",
    issuer: "Tata Trusts",
    description: "Awarded to 100 meritorious students annually for higher studies abroad (≈$12k scholarship).",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Data Stellar Hackathon Finalist",
    issuer: "Barclays",
    description: "Ranked in the top 5 teams in a highly competitive, data-focused hackathon.",
    icon: "🏅",
  },
];

const AwardsAndAchievements = () => {
  return (
    <section id="awards" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Awards & Achievements
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A recognition of my dedication and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awardData.map((award) => (
            <div key={award.id} className="bg-slate-50 rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 mt-1">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{award.title}</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-2">{award.issuer}</p>
                  <p className="text-gray-600">{award.description}</p>
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
