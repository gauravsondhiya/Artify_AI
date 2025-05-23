import React from "react";
import { assets } from "../assets/assets";
const Home = () => {
  return (
    <div className="w-[90%] m-auto border border-black text-center">
      <div>
        <p className="text-7xl ">
          Turn text to <br />
          <span className="text-blue-400">Image</span>, in seconds.
        </p>
        <p className=" mt-4">
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds <br />
          Just type, and watch the magic happen.
        </p>
      </div>
      {/* black button */}

      <button className=" mt-4 h-[55px] w-[239px] bg-black m-auto rounded-3xl text-white">
        Generate Images
      </button>

      <div className="mt-5 w-[543px] h-[77px] [&>img]:w-[77px] grid grid-cols-5 m-auto [&>img]:rounded-2xl" >
        <img src={assets.sample_img_1} alt="" />
        <img src={assets.sample_img_2} alt="" />
        <img src={assets.sample_img_1} alt="" />
        <img src={assets.sample_img_2} alt="" />
        <img src={assets.sample_img_1} alt="" />
      </div>
    </div>
  );
};

export default Home;
