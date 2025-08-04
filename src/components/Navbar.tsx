import React from 'react';

const Navbar = ({ userProfileImage = '/user-profile.jpg' }) => {
  return (
    // The `sticky` class is useful for a navbar that sticks to the top of its parent container.
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 sticky top-0 z-40">
      
      {/* Left section: Logo */}
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-xl cursor-pointer">
          G
        </div>
      </div>

      {/* Center section: Search Bar */}
      <div className="flex-grow flex justify-center mx-8">
        {/* We remove `group-hover:max-w-md` to stop the search bar from shrinking */}
        <div className="relative w-full max-w-xl transition-all duration-300 ease-in-out">
          <input
            type="text"
            placeholder="Search or ask anything..."
            className="w-full bg-gray-100 py-2.5 pl-12 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>
      </div>

      {/* Right section: Actions and User Profile */}
      {/* We remove all `group` and `hover` related classes from this section */}
      <div className="flex items-center space-x-2">
        {/* The New Chat button no longer has a hover effect */}
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 transition-colors duration-200">
          ➕
        </button>

        {/* The user profile no longer has a hover-activated dropdown */}
        <button className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center focus:outline-none">
          <img 
            src={userProfileImage} 
            alt="User Profile" 
            className="w-full h-full object-cover cursor-pointer" 
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;