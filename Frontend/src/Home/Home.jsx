import React from "react";
import { NavLink } from "react-router";
import { assets, stepsData,testimonialsData } from "../assets/assets";
import Carsoles from "../Carosoles/Carsoles";
const Home = () => {
  return (
    <div className="w-[90%] m-auto  border-black text-center">
      <div>
        <p className="text-7xl ">
          , images.
          one prompt to create<br />
          <span className="text-blue-400">Image</span>, One click to remove backgrounds
        </p>
        <p className="mt-4">
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds <br />
          Just type, and watch the magic happen.
        </p>
      </div>
      {/* black button */}
  <NavLink to="/Search">
      <button className=" mt-4 h-[55px] w-[239px] bg-black m-auto rounded-3xl text-white">
        Generate Images
      </button>
</NavLink>

 <Carsoles/>
     

      <p className="text-3xl font-bold mt-9" >How it works</p>
      <p>Transform Words Into Stunning Images</p>
      <div>
        {stepsData.map((e,i) => (
          <div key={i}  className=" rounded-2xl border-black w-[705px] h-[114px] m-auto flex text-left mt-3 shadow-md">
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

          {/* description */}

          <p className="text-3xl mt-7 font-bold">Create AI Images</p>
          <p className="text-xl">Turn your imagination into visuals</p>

           <div className="w-[80%] m-auto  border-red-500 grid sm:grid-cols-2 gap-2 mt-5">
              <div className="h-[100%]">
                 <img src={assets.sample_img_1} alt="" />
              </div>
              <div className=" border-yellow-400 text-left">
                <h1 className="font-semibold text-2xl">Introducing the AI-Powered Text to Image Generator</h1>
                <br />
                <p className="">Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly. <br /><br />
                Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
                 </p>
              </div>
           </div>

            {/* customer reviews */}

             <p className="text-2xl font-bold mt-10">Customer testimonials</p>
             <p>What Our Users Are Saying</p>
           <div className="grid sm:grid-cols-3 gap-3 mt-3 ">
           {
          testimonialsData.map((e, i)=>(
            <div key={i} className=" rounded-2xl shadow-xl">
               <div className="h-[30%]  border-red-500">
               <img className="h-[100%] m-auto" src={e.image} alt="" />
               </div>
               <p className="font-semibold">{e.name}</p>
               <p>{e.role}</p>
               <p>{Array.from({ length: e.stars }).map(() =>(
                "⭐"
               ))}</p>
               <p>{e.text}</p>
            </div>

          ))
          }
        
           </div>
<div className="mt-5 w-[543px] h-[77px] [&>img]:w-[77px] grid grid-cols-5 m-auto [&>img]:rounded-xl">
        <img src={assets.sample_img_1} alt="" />
        <img src={assets.sample_img_2} alt="" />
        <img src={assets.demo9} alt="" />
        <img src={assets.demo5} alt="" className="h-[100%] object-cover"/>
        <img src={assets.demo2} alt="" className="h-[100%] object-cover"/>
      </div>
    </div>
  );
}

export default Home;
