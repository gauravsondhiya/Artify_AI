import React from "react";
import { NavLink } from "react-router";
import { assets, stepsData, testimonialsData } from "../assets/assets";
import Carsoles from "./Carsoles";
import Prompt from "./Prompt";
import Bgremove from "./Bgremove";
import Review from "./Review";
const Home = () => {
  return (
    <div className="w-[90%] m-auto mt-10  border-black text-center">
      <div >
        <p className="text-2xl sm:text-6xl font-semibold  sm:tracking-wide ">
          Transform your Photos and Bring your Imagination to life with
          <span className="text-blue-400"> AI-driven Editing.</span>
        </p>
      </div>
      <div className=" mt-10 w-[100%] h-[85px] [&>img]:w-[85px] [&>img]:h-[85px] 
      flex sm:gap-5 gap-3 justify-center  [&>img]:rounded-xl">
        <img src={assets.sample_img_1} alt="" />
        <img src={assets.sample_img_2} alt="" />
        <img src={assets.demo9} alt="" />
        <img src={assets.demo5} alt="" className="h-[100%] object-cover" />
        <img src={assets.demo2} alt="" className="h-[100%] object-cover" />
      </div>
      <Prompt />
      <Bgremove/>
      <Carsoles />
      <Review/>
    </div>
  );
};

export default Home;
