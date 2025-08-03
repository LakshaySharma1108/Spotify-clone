// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-3 md:px-6 lg:px-10 flex justify-between items-center w-full font-spotify">
      {/* Left */}
      <div className="flex items-center gap-4 md:gap-6 w-full md:w-[60%]">
        <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Spotify-icon.png" alt="Spotify Logo" />
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] transition">
          <i className="ri-home-5-fill text-xl"></i>
        </button>
        <div className="hidden md:flex items-center rounded-full bg-[#1f1f1f] h-10 md:h-12 px-3 hover:bg-[#2a2a2a] w-full md:w-[60%]">
          <i className="ri-search-2-line text-lg mr-3"></i>
          <input type="text" placeholder="What do you want to play?" className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400" />
          <div className="h-5 w-px bg-white mx-2"></div>
          <i className="ri-inbox-archive-line text-lg"></i>
        </div>
      </div>

      {/* Right */}
      <div className="hidden md:flex items-center space-x-5 md:space-x-6 shrink-0">
        <a href="#" className="hover:text-gray-400 text-[0.8rem] font-extrabold">Premium</a>
        <a href="#" className="hover:text-gray-400 text-[0.8rem] font-extrabold">Support</a>
        <a href="#" className="hover:text-gray-400 text-[0.8rem] font-extrabold">Download</a>
        <div className="h-6 w-px bg-white"></div>
        <button className="hover:text-gray-200 flex items-center gap-2">
          <i className="ri-arrow-down-circle-line text-xl"></i>
          <span className="text-[0.9rem]">Install App</span>
        </button>
        <a href="#" className='font-bold'>Sign up</a>
        <button className='rounded-[40px] bg-white text-black px-8 py-3 font-bold'>Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
