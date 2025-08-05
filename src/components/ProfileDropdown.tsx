import React, { useState, useEffect, useRef } from 'react';
import { 
  FiCamera, 
  FiPhone, 
  FiMail, 
  FiDownload, 
  FiLinkedin, 
  FiInstagram, 
  FiGithub,
  FiX, // For the close button
  FiExternalLink // For clickable indication
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si'; // LeetCode icon

// Define props interface for the ProfileDropdown component
interface ProfileDropdownProps {
  userProfileImage: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ userProfileImage, isOpen, onClose }) => {
  // A ref to the dropdown container to handle clicks outside of it
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Define contact and social media information in a JSON object
  const contactInfo = {
    greeting: "Hello there!",
    phone: {
      number: "+918766998642",
      link: "tel:+918766998642"
    },
    email: {
      address: "kaustubhgharat06@gmail.com",
      link: "mailto:kaustubhgharat06@gmail.com"
    },
    resume: {
      label: "Download Resume",
      link: "/Kaustubh_Gharat_Resume.pdf"
    },
    socials: [
      {
        name: "LinkedIn",
        icon: FiLinkedin,
        link: "https://www.linkedin.com/in/kaustubh-gharat-6045b7208/" 
      },
      {
        name: "GitHub",
        icon: FiGithub,
        link: "https://github.com/Kaustubh1504" 
      },
      {
        name: "LeetCode",
        icon: SiLeetcode,
        link: "https://leetcode.com/u/kgharat008769321/"
      },
      {
        name: "Instagram",
        icon: FiInstagram,
        link: "https://www.instagram.com/kaustubhgharat15/"
      },
    ]
  };

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose(); // Call the onClose prop to close the dropdown
      }
    };

    // Add mousedown event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, onClose]); // Depend on dropdownRef and onClose

  if (!isOpen) {
    return null; // Don't render if not open
  }

  return (
    <div
      ref={dropdownRef}
      className="absolute top-12 right-0 mt-2 w-80 bg-white dark:bg-[#282a2d] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 text-center z-50"
    >
      <div className="absolute top-4 right-4">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FiX className="h-5 w-5" /> {/* Using FiX for close button */}
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-4xl text-white font-bold mb-4 overflow-hidden">
          <img
            src={userProfileImage}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{contactInfo.greeting}</p>
        <a href={contactInfo.phone.link} className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center justify-center gap-2 hover:underline">
          <FiPhone className="h-4 w-4" /> {contactInfo.phone.number} <FiExternalLink className="h-3 w-3 ml-1" />
        </a>
        <a href={contactInfo.email.link} className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center justify-center gap-2 hover:underline">
          <FiMail className="h-4 w-4" /> {contactInfo.email.address} <FiExternalLink className="h-3 w-3 ml-1" />
        </a>
      </div>

      <a href={contactInfo.resume.link} download className="w-full py-2 px-4 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 mb-4 flex items-center justify-center gap-2">
        <FiDownload className="h-5 w-5" />
        {contactInfo.resume.label}
      </a>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {contactInfo.socials.map((social, index) => {
          const Icon = social.icon; // Get the component from the object
          return (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 min-w-[48%] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Icon className="h-5 w-5" />
              {social.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileDropdown;
