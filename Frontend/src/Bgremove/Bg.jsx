import React from "react";
import {bgrm} from '../assets/assets.js'
const Bg = () => {
  return (
    <div>
      <div className=" text-center">
        <p className="text-3xl font-bold mt-9">Steps to remove background</p>
        <p className="text-xl">Image in seconds</p>
      </div>

      <div className="[&>div]:mt-3">
        {bgrm.map((e, i) => (
          <div
            key={i}
            className=" rounded-2xl border border-gray-300 sm:w-[705px] h-[114px] sm:m-auto 
                flex text-left mt-3 shadow-md"
          >
            <div className="w-[10%]  m-auto">
              <img className="w-[45px] m-auto " src={e.icon} alt="" />
            </div>
            <div className=" w-[80%]  border-red-400 m-auto -ml-4">
              <p className="text-2xl font-semibold">{e.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bg;
