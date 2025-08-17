import React from "react";

const Artists = () => {
  // Example artist data (replace with real ones later)
  const artists = [
    { name: "Pritam", image: "https://i.scdn.co/image/ab6761610000e5eb9a47f8e1a50c853cfe13e572" },
    { name: "A.R. Rahman", image: "https://i.scdn.co/image/ab6761610000e5eb8c4c69c2794e2dbd9af70906" },
    { name: "Arijit Singh", image: "https://i.scdn.co/image/ab6761610000e5ebd8db39f5f205b5d0f3db1a4c" },
    // Add more artists if you want
  ];

  // Fill up to 20 cards by repeating
  const artistCards = Array.from({ length: 20 }).map((_, i) => ({
    ...artists[i % artists.length], // repeat artists
    id: i,
  }));

  return (
    <div className="mb-8">
      <h2 className="text-white text-lg font-bold mb-4">Popular Artists</h2>

      {/* Horizontal scroll container */}
      <div className="flex gap-6 overflow-x-scroll pb-4 scrollbar-hide">
        {artistCards.map((artist) => (
          <div
            key={artist.id}
            className="flex flex-col items-center bg-dark p-4 rounded-lg flex-shrink-0 w-[160px] hover:bg-light_grey transition-colors duration-200"
          >
            {/* Circle Image */}
            <div className="relative">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-36 h-36 rounded-full object-cover"
              />

              {/* Play Button */}
              <button className="absolute bottom-2 right-2 bg-green-500 text-black w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform">
                ▶
              </button>
            </div>

            {/* Artist Info */}
            <h3 className="text-white font-bold mt-3">{artist.name}</h3>
            <p className="text-gray-400 text-sm">Artist</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
