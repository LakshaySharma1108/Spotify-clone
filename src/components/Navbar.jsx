import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 md:px-6 lg:px-10 py-3 flex justify-between items-center h-20 w-full font-spotify">
      {/* Left: Logo + Home + Search */}
      <div className="flex items-center gap-4 md:gap-6 w-full md:w-[60%]">
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Spotify-icon.png"
          alt="Spotify Logo"
        />

        {/* Home Button */}
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] transition duration-200">
          <i className="ri-home-5-fill text-white text-xl"></i>
        </button>

        {/* Search Box */}
        <div className="hidden md:flex items-center rounded-full bg-[#1f1f1f] h-10 md:h-12 px-3 hover:bg-[#2a2a2a] transition-all duration-200 w-full md:w-[60%]">
          <i className="ri-search-2-line text-white text-lg mr-3"></i>

          <input
            type="text"
            placeholder="What do you want to play?"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
          />

          <div className="h-5 w-[1px] bg-white mx-2"></div>

          <i className="ri-inbox-archive-line text-white text-lg"></i>
        </div>
      </div>

      {/* Right: Links + Install Button */}
      <div className="hidden md:flex items-center space-x-5 md:space-x-6 shrink-0">
        <a href="#" className="hover:text-gray-400 transition text-sm text-gray-400 font-extrabold text-[1.2rem]">Premium</a>
        <a href="#" className="hover:text-gray-400 transition text-sm text-gray-400 font-extrabold text-[1.2rem]">Support</a>
        <a href="#" className="hover:text-gray-400 transition text-sm text-gray-400 font-extrabold text-[1.2rem]">Download</a>

        <div className="h-6 w-[1.5px] bg-white mx-1"></div>

        <button className="hover:text-gray-200 transition bg-transparent px-3 py-2 flex items-center gap-2 rounded text-[1.2rem]">
          <i className="ri-arrow-down-circle-line text-white text-xl"></i>
          <span className="text-sm font-medium text-[0.9rem]">Install App</span>
        </button>

        <a href="#" className='font-bold'>Sign up</a>

        <button className='rounded-[40px] bg-white text-black h-[95%] px-8 py-4 font-bold'>
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
