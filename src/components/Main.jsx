import React from "react";
import { FaGlobe } from "react-icons/fa";
import Cards from "./Cards";
import Profiles from "./Profiles";

const Main = () => {
  return (
    <div className="flex w-full flex-1 overflow-hidden bg-black">
      {/* Left sidebar */}
      <div className="w-[30vw] bg-dark rounded-[0.7rem] mx-2 text-white font-spotify font-bold flex flex-col">
        {/* ...sidebar code... */}
      </div>

      {/* Right content */}
      <div className="flex-1 bg-dark rounded-[0.7rem] mr-2 overflow-hidden p-4 scrollbar-hide">
        <div className="cards overflow-y-auto">
          <Cards title="Recommended Songs" count={20} />
          <Profiles />
          <Cards title="Top Trending" count={15} />
          <Cards title="Your Mixes" count={12} />
          <Cards title="Latest Podcasts" count={10} />
          <Cards title="For You" count={8} />
        </div>
      </div>
    </div>
  );
};

export default Main;
