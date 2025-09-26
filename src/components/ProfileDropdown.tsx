import React, { useEffect, useRef, useState } from "react";
import {
  FiPhone,
  FiMail,
  FiDownload,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiX,
  FiExternalLink,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { DateTime } from "luxon";

interface ProfileDropdownProps {
  userProfileImage: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  userProfileImage,
  isOpen,
  onClose,
}) => {
  const [timeInfo, setTimeInfo] = useState({ time: "", day: "" });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const contactInfo = {
    greeting: "Hello there!",
    phone: {
      number: "+18573796431",
      link: "tel:+18573796431",
    },
    email: {
      address: "kaustubhgharat06@gmail.com",
      link: "mailto:kaustubhgharat06@gmail.com",
    },
    resume: {
      label: "Download Resume",
      link: "/Kaustubh_Gharat_Resume.pdf",
    },
    socials: [
      {
        name: "LinkedIn",
        icon: FiLinkedin,
        link: "https://www.linkedin.com/in/kaustubh-gharat-6045b7208/",
      },
      {
        name: "GitHub",
        icon: FiGithub,
        link: "https://github.com/Kaustubh1504",
      },
      {
        name: "LeetCode",
        icon: SiLeetcode,
        link: "https://leetcode.com/u/kgharat008769321/",
      },
      {
        name: "Instagram",
        icon: FiInstagram,
        link: "https://www.instagram.com/kaustubhgharat15/",
      },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef, onClose]);

  useEffect(() => {
    const updateTime = () => {
      const now = DateTime.now().setZone("America/New_York");
      const time = now.toFormat("hh:mm a");
      const day = now.toFormat("cccc");
      setTimeInfo({ time, day });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="
        absolute top-12 right-0 mt-2 w-80 rounded-2xl p-5 text-center z-50
        bg-white/40 border border-white/60 backdrop-blur-xl
        shadow-[inset_0_1px_0px_rgba(255,255,255,0.7),0_4px_12px_rgba(0,0,0,0.1)]
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:pointer-events-none
      "
    >
      {/* Close Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 transition-colors"
        >
          <FiX className="h-5 w-5" />
        </button>
      </div>

      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-md mb-4">
          <img
            src={userProfileImage}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl font-semibold text-gray-900">
          {contactInfo.greeting}
        </p>

        <a
          href={contactInfo.phone.link}
          className="text-sm text-gray-600 mb-2 flex items-center justify-center gap-2 hover:underline"
        >
          <FiPhone className="h-4 w-4" /> {contactInfo.phone.number}
          <FiExternalLink className="h-3 w-3 ml-1" />
        </a>

        <a
          href={contactInfo.email.link}
          className="text-sm text-gray-600 mb-4 flex items-center justify-center gap-2 hover:underline"
        >
          <FiMail className="h-4 w-4" /> {contactInfo.email.address}
          <FiExternalLink className="h-3 w-3 ml-1" />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href={contactInfo.resume.link}
        download
        className="
          w-full py-2 px-4 rounded-full border border-gray-300 text-sm font-medium text-gray-800
          hover:bg-white/50 transition-colors duration-200 flex items-center justify-center gap-2
        "
      >
        <FiDownload className="h-5 w-5" />
        {contactInfo.resume.label}
      </a>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 mt-4">
        {contactInfo.socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 min-w-[48%] flex items-center justify-center gap-2 py-3 px-4 rounded-xl
                border border-gray-300 text-sm font-medium text-gray-800
                backdrop-blur-sm
                hover:bg-white/50 transition-colors duration-200
              "
            >
              <Icon className="h-5 w-5" />
              {social.name}
            </a>
          );
        })}
      </div>
      {/* Footer Time Info */}
      <div className="flex justify-center gap-4 text-xs text-gray-500 mt-4">
        <span>{timeInfo.time}</span>
        <span>•</span>
        <span>{timeInfo.day}</span>
        <span>•</span>
        <span>Boston, MA, USA</span>
      </div>
    </div>
  );
};

export default ProfileDropdown;
