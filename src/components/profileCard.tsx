import React from "react";
import { FiExternalLink, FiMail, FiPhone } from "react-icons/fi";

interface ProfileCardProps {
  photoUrl: string;
  name: string;
  isVerified?: boolean; // Optional prop
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  photoUrl,
  name,
  isVerified = false,
  description,
}) => {
  return (
    <div className="w-72 h-96 relative rounded-xl overflow-hidden shadow-lg">
      {/* Full background image */}
      <img
        src={photoUrl}
        alt={name}
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Overlay with gradient and blur effect */}
      <div
        className="absolute bottom-0 w-full h-7/13 pt-24 p-4 text-white
                   backdrop-blur-lg bg-gradient-to-t from-black/50 to-transparent
                   [mask-image:linear-gradient(to_top,black_60%,transparent_100%)]"
      >
        {/* Name and Verified Badge */}
        <div className="flex items-center space-x-2 mb-1">
          <h2 className="text-lg font-semibold text-white">{name}</h2>
          {isVerified && (
            <span className="bg-green-500 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs">
              ✓
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-200 text-sm mb-3">{description}</p>

        {/* Follow Button */}
        <a href={"tel:+18573796431"}>
          <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 border border-white/30 cursor-pointer mr-1">
            <FiPhone className="h-4 w-4" />
          </button>
        </a>

        <a href={"mailto:kaustubhgharat06@gmail.com"}>
          <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 border border-white/30 cursor-pointer mr-1">
            <FiMail className="h-4 w-4" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
