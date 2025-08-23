import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router";
import { IoReorderThreeOutline } from "react-icons/io5";
import { GiCrossedSwords } from "react-icons/gi";

const Navbar = () => {
  let [hiden, sethiden] = useState(false);

  let hider = () => {
    sethiden(!hiden);
  };
  return (
    <>
      <div>
        {/* logo */}
         <div className="sm:flex justify-around hidden sm:block p-3 border border-blue-300 mt-4 w-[90%] m-auto rounded-2xl">
        <NavLink to="/">
          <div className="flex gap-1 text-2xl font-bold">
            <img src={assets.logo_icon} alt="" />
            <p>Artify AI</p>
          </div>
        </NavLink>
        <div className="flex gap-5 font-semibold ">
          <NavLink
            to="/Price"
            className="bg-blue-400 p-1 text-center rounded-3xl font-semibold w-[100px]"
          >
            Pricing
          </NavLink>
          <NavLink to="/Login" className=" p-1 text-center  bg-black text-white w-[100px] rounded-2xl">
            Login
          </NavLink>
          <NavLink to="/Signup" className=" p-1 text-center  bg-black text-white w-[100px] rounded-2xl">
            Signup
          </NavLink>
        </div>
      </div>

        {/* button */}

        <div className="sm:hidden text-2xl border border-blue-300 flex justify-around p-4 mt-3 w-[90%] m-auto rounded-2xl">
         
          <NavLink to="/" className="flex gap-2 text-2xl font-bold border border-white">
            <img src={assets.logo_icon} alt="" />
            <p>Artify AI</p>
          </NavLink>
          <button onClick={hider} className="text-3xl">
            {hiden ? <GiCrossedSwords /> : <IoReorderThreeOutline />}
          </button>
        </div>

        {hiden && (
          <div className="backdrop-blur-xl text-2xl font-bold text-center  grid ">
            <NavLink to='/price' className="mt-3 hover:underline">Pricing</NavLink>
            <NavLink to='/Login' className="mt-3 hover:underline">Login</NavLink>
            <NavLink to='/Signup' className="mt-3 hover:underline">Signup</NavLink>
            
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
