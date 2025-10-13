import React, { useEffect, useState } from "react";
// import Carsoles from "../Carosoles/Carsoles";
import ImageGenerator from "./ImageGenerator";
import { stepsData } from "../assets/assets.js";
const Search = () => {
  return (
    <div>
      {/* <Carsoles /> */}
      

      <div className=" text-center">
        <p className="text-3xl font-bold mt-9">How it works</p>
        <p>Transform Words Into Stunning Images</p>
      </div>

      <div>
        {stepsData.map((e, i) => (
          <div
            key={i}
            className=" rounded-2xl border border-gray-300 sm:w-[705px] h-[114px] sm:m-auto 
            flex text-left mt-3 shadow-md"
          >
            <div className="w-[10%]  m-auto">
              <img className="w-[45px] m-auto" src={e.icon} alt="" />
            </div>
            <div className=" w-[80%]  border-red-400 m-auto -ml-4">
              <p className="text-2xl font-semibold">{e.title}</p>
              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ImageGenerator />
    </div>
  );
};

export default Search;
