import react from "react";
import { assets, stepsData, testimonialsData } from "../assets/assets";

const Review = () => {
  return (
    <>
      <p className="text-4xl font-bold mt-10">Customer testimonials</p>
      <p className="text-xl">What Our Users Are Saying</p>
      <div className="grid sm:grid-cols-12  border-green-500 mt-5">
        {testimonialsData.map((e, i) => (
          <div
            key={i}
            className="sm:col-span-4 m-auto h-[327px] w-[322px]  
          border border-gray-300 rounded-2xl [&>p]:mt-2"
          >
            <div className="  mt-5">
              <img className=" m-auto " src={e.image} alt="" />
            </div>
            <div>
              <p className="font-semibold text-xl mt-2">{e.name}</p>
              <p>{e.role}</p>
            </div>

            <p>{Array.from({ length: e.stars }).map(() => "⭐")}</p>
            <p className=" font-sans mt-2">{e.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Review;
