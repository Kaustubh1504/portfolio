import React, { useState } from 'react';

// --- Type Definition for Hobby ---
interface Hobby {
  id: number;
  name: string;
  description: string;
  icon?: string; // Emoji, now optional
  profileUrl?: string; // For links like a chess profile
  images?: string[]; // For photo galleries
  backgroundStyle?: React.CSSProperties;
}

// --- Hobbies Data ---
const hobbiesData: Hobby[] = [
  {
    id: 1,
    name: "Trekking & Hiking",
    description: "Exploring new trails and embracing the challenge of a summit provides a great sense of peace and accomplishment.",
    images: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=60", // Primary image
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542224562-2d293d2d6033?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1473242035343-63497a69b05c?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1458442310124-054243371275?w=500&auto=format&fit=crop&q=60",
    ]
  },
  {
    id: 2,
    name: "Chess",
    description: "I enjoy the strategic depth and challenge of chess, playing regularly to sharpen my analytical skills.",
    icon: "♟️",
    profileUrl: "#", // Add your chess.com or Lichess profile link here
    backgroundStyle: {
        backgroundImage: `url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=60')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  },
  {
    id: 3,
    name: "Drawing & Sketching",
    description: "Sketching is my creative outlet, allowing me to bring ideas to life on paper, from quick doodles to detailed drawings.",
    icon: "✍️",
    images: [
        "https://images.unsplash.com/photo-1541753866388-0b3c613da38d?w=500&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1588864721491-39983616599f?w=500&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1596743360942-835aa29c48b2?w=500&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1611652033959-8a3c483a3af2?w=500&auto=format&fit=crop&q=60",
    ],
    backgroundStyle: {
        backgroundImage: `url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=60')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  },
];


const Interests = () => {
  const [modalContent, setModalContent] = useState<{ images: string[], title: string } | null>(null);

  const openModal = (images: string[], title: string) => {
    setModalContent({ images, title });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      {/* Hobbies Section */}
      <section id="hobbies" className="bg-white pt-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbiesData.map((hobby) => (
              <div 
                key={hobby.id} 
                style={hobby.backgroundStyle}
                onClick={() => hobby.images && openModal(hobby.images, hobby.name)}
                className={`group relative bg-slate-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col overflow-hidden min-h-[400px] ${hobby.images ? 'cursor-pointer' : ''}`}
              >
                {hobby.images && hobby.images.length > 0 && !hobby.icon ? (
                  // Trekking Card (no icon)
                  <>
                    <img src={hobby.images[0]} alt={hobby.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="relative p-6 mt-auto text-white z-10">
                       <h3 className="text-2xl font-bold">{hobby.name}</h3>
                       <p className="text-gray-200 mt-1">{hobby.description}</p>
                    </div>
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                       <span className="relative text-white font-bold text-lg bg-black/50 px-3 py-1 rounded-md">View Gallery</span>
                    </div>
                  </>
                ) : (
                  // Chess & Drawing Cards
                  <>
                    { hobby.backgroundStyle?.backgroundImage && <div className="absolute inset-0 bg-black/60"></div> }
                    <div className="relative z-10 flex flex-col flex-grow items-center justify-center text-center p-6 h-full text-white">
                        <div className="text-6xl mb-4 drop-shadow-lg">
                            {hobby.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{hobby.name}</h3>
                        <p className="text-gray-200 mt-2 flex-grow">{hobby.description}</p>
                        {hobby.profileUrl && (
                            <a 
                                href={hobby.profileUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={(e) => e.stopPropagation()} // Prevents modal from opening
                                className="mt-4 inline-block bg-white/20 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
                            >
                                View Profile
                            </a>
                        )}
                        {hobby.images && (
                             <button 
                                onClick={() => openModal(hobby.images!, hobby.name)}
                                className="mt-4 inline-block bg-white/20 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
                            >
                                View Sketches
                            </button>
                        )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Modal */}
      {modalContent && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 animate-slide-up"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{modalContent.title} Gallery</h3>
              <button 
                onClick={closeModal} 
                className="text-gray-500 hover:text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {modalContent.images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Interests;

