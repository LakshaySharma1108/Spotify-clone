// Cards.jsx
import React from "react";

const Cards = ({ title = "Recommended Songs", count = 10 }) => {
  return (
    <div className="mb-8">
      <h2 className="text-white text-lg font-bold mb-4">{title}</h2>

      {/* Cards container */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {Array.from({ length: count }).map((_, index) => (
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
              rel="noreferrer"
              className="mt-2 inline-block bg-green-500 text-black w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold"
            >
              ▶
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
