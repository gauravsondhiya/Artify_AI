import react from "react";
import { assets, stepsData, testimonialsData } from "../assets/assets";
const Prompt = () => {
  return (
    <div>
      {/* <div>
        <p className="text-7xl ">
          One prompt to create
          <span className="text-blue-400"> Image</span>
        </p>
        <p className="mt-4">
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds <br />
          Just type, and watch the magic happen.
        </p>
      </div> */}
      {/* <p className="text-3xl mt-7 font-bold">Create AI Images</p>
            <p className="text-xl">Turn your imagination into visuals</p> */}

      <div className=" border-red-600 grid sm:grid-cols-12 mt-11">
        <div className=" border-amber-300 sm:col-span-6">
          <img src={assets.sample_img_1} alt="" />
        </div>
        <div className=" border-amber-300 sm:col-span-6 m-auto text-4xl  sm:[&>p]:text-5xl font-semibold">
          <p>Introducing the</p>
          <p className=" bg-gradient-to-b from-blue-500 via-blue-400 to-blue-900 text-transparent bg-clip-text">
            AI-Powered{" "}
          </p>
          <p> Text to Image Generator</p>
          <button className="  mt-7 h-[65px] w-[239px] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-900 text-transparent  rounded-3xl text-2xl text-white">
            Generate Images
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
