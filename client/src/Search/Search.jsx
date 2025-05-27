import React from "react";
import search from "../assets/1.jpg";
const Search = () => {
  return (
    <div className="w-[90%] m-auto border border-black">
      <div className="h-[340px] ">
        <img src={search} alt="" className="h-[100%] m-auto rounded-2xl"/>
      </div>
      <div className="bg-[#6B6B6B] w-[650px] m-auto h-[60px] mt-6 rounded-4xl
      ">
          <input type="text" placeholder="Describe what you want to generate" 
          className=" w-[77%] h-[100%]  text-xl ml-4 outline-none"/>
          <button className="bg-black text-white h-[100%] w-[20%]  rounded-4xl">Generate</button>
      </div>
    </div>
  );
};

export default Search;
