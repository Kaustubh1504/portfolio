import React, { useState, useEffect, useRef } from 'react';
import ProfileDropdown from './ProfileDropdown'; // Import the new ProfileDropdown component

// Define the props for the Navbar component.
// userProfileImage is optional and defaults to the new, correct path for the public folder.
const Navbar = ({ userProfileImage = '/photo.jpg' }) => {
  // State to manage the visibility of the profile dropdown.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State to track if the user has scrolled down the page.
  const [isScrolled, setIsScrolled] = useState(false);

  // A ref to the navbar container to detect clicks outside of it.
  const navbarRef = useRef<HTMLDivElement>(null);

  // useEffect to handle scroll events and update the `isScrolled` state.
  useEffect(() => {
    const handleScroll = () => {
      // Check if the vertical scroll position is greater than 0.
      if(isScrolled){
        
      }
      setIsScrolled(window.scrollY > 0);
    };

    // Add the scroll event listener to the window.
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // The handleClickOutside logic is now handled within ProfileDropdown itself,
  // but we still need a ref for the Navbar to ensure clicks outside the entire navbar close the dropdown
  // if it's open. The ProfileDropdown will handle its own internal clicks.
  useEffect(() => {
  const handleClickOutsideNavbar = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutsideNavbar);
  return () => {
    document.removeEventListener('mousedown', handleClickOutsideNavbar);
  };
}, [navbarRef]);


  return (
    // The header has a conditional background and shadow based on the scroll position.
    // It is sticky, transparent, and uses a backdrop blur for a modern "frosted glass" effect.
    <header
      ref={navbarRef}
      className={`
    sticky top-0 z-40 h-16 
    bg-white dark:bg-[#1f1f1f]
    flex items-center justify-between px-6
  `}
    >
      {/* Left section: Logo and Profile Info */}
      <div className="flex items-center space-x-4">
        {/* The updated logo with a border and a pulse animation on hover. */}
        <div className="w-10 h-10 rounded-full  text-white font-bold flex items-center justify-center text-md cursor-pointer border-2 border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg">
          KG
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-400">Kaustubh Gharat</h1>
          {/* The "Full Stack Developer" text is now in a button with a typing animation. */}
          <button className="flex items-center space-x-1 px-3 bg-gray-500 dark:bg-[#282a2c] rounded-full text-sm text-gray-500 dark:text-gray-500 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
            <span className="typing-container">
              <span className="typing-text border-r-2 border-transparent pr-1">Full Stack Developer</span>
            </span>
          </button>
        </div>
      </div>
      {/* Right section: Actions and User Profile with Dropdown */}
      <div className="flex items-center space-x-2">
        {/* User Profile with click-activated dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center focus:outline-none"
          >
            <img
              src={userProfileImage}
              alt="User Profile"
              className="w-full h-full object-cover cursor-pointer"
            />
            {/* The new pulsing animation dot */}
            <span className="absolute bottom-0 right-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          </button>

          {/* Render the ProfileDropdown component */}
          <ProfileDropdown
            userProfileImage={userProfileImage}
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
