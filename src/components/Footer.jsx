// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black p-1'>
      <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white font-medium rounded-[0.5rem] m-2">
        <div>
          <p className="font-semibold">Preview of Spotify</p>
          <p className="text-xs">Sign up to get unlimited songs and podcasts with occasional ads.</p>
        </div>
        <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold">
          Sign up free
        </button>
      </div>
    </div>
  );
};

export default Footer;
