import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <>
      <div className=" flex justify-around p-3 border
       border-blue-200  w-[90%] m-auto mt-3 rounded-2xl">
        <NavLink to="/">
          <div className="flex gap-1 text-2xl font-bold">
            <img src={assets.logo_icon} alt="" />
            <p>Artify AI</p>
          </div>
        </NavLink>
        <div className="flex gap-5 font-semibold ">
          <NavLink
            to="/Price"
            className="bg-blue-200 p-1 text-center rounded-2xl font-semibold w-[100px]"
          >
            Pricing
          </NavLink>
          <NavLink to="/Login" className=" p-1 text-center  bg-black text-white w-[100px] rounded-2xl">
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
