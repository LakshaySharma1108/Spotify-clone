// Main.jsx
import React from "react";
import { FaGlobe } from "react-icons/fa";

const Main = () => {
  return (
    <div className="flex w-full flex-1 overflow-hidden bg-black">
      {/* Left sidebar */}
      <div className="w-[30vw] bg-dark rounded-[0.7rem] mx-2 text-white font-spotify font-bold flex flex-col">
        <div className="flex items-center justify-between px-5 pt-3 pb-4">
          <h3>Your Library</h3>
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800">
            <i className="ri-add-line text-xl"></i>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-2">
          {/* Cards */}
          <div className="rounded-[1rem] bg-light_grey mt-4 mb-6 p-4">
            <h1>Create your first playlist</h1>
            <p className="font-normal mb-4">It's easy, we'll help you</p>
            <button className="bg-white text-black rounded-full px-4 py-1 text-sm font-semibold">
              Create playlist
            </button>
          </div>
          <div className="rounded-[1rem] bg-light_grey mt-4 mb-6 p-4">
            <h1>Let's find some podcasts to follow</h1>
            <p className="font-normal mb-4">We'll keep you updated</p>
            <button className="bg-white text-black rounded-full px-4 py-1 text-sm font-semibold">
              Browse podcasts
            </button>
          </div>
        </div>
        <div className="px-2 pb-3">
          <div className="flex flex-wrap gap-4 text-gray-400 text-xs p-4">
            <a href="#" className="hover:underline">
              Legal
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
            <a href="#" className="hover:underline">
              About Ads
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
          <div className="pl-3">
            <button className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-1 text-sm">
              <FaGlobe className="text-lg" />
              English
            </button>
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1 bg-dark rounded-[0.7rem] mr-2 overflow-x-scroll overflow-y-hidden p-4">



        <h2 className="text-white text-lg font-bold mb-4">Recommended Songs</h2>

        {/* Cards container */}
        <div className="grid grid-cols-20 gap-4 overflow-x-auto pb-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="bg-light_grey rounded-lg p-3 text-white w-[150px] flex-shrink-0"
            >
              <img
                src={`https://picsum.photos/200?random=${index + 1}`}
                alt="cover"
                className="rounded-lg mb-2"
              />
              <h3 className="text-sm font-bold">Song Title {index + 1}</h3>
              <p className="text-xs text-gray-400">Artist {index + 1}</p>
              <a
                href={`https://open.spotify.com/track/${index + 1}`}
                target="_blank"
                className="mt-2 inline-block bg-green-500 text-black w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold"
              >
                ▶
              </a>
            </div>
          ))}


          
        </div>
      </div>
    </div>
  );
};

export default Main;
