import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router";
import { IoReorderThreeOutline } from "react-icons/io5";
import { GiCrossedSwords } from "react-icons/gi";

const Navbar = () => {
  const [hiden, sethiden] = useState(false);
  const [user, setUser] = useState(null); // ✅ user state
  const [coins, setCoins] = useState(50); // example coins

  const hider = () => sethiden(!hiden);

  const handleLogin = () => {};

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div>
      {/* ✅ Desktop Navbar */}
      <div className="sm:flex justify-around hidden sm:block p-3 border border-blue-300 mt-4 w-[90%] m-auto rounded-2xl">
        <NavLink to="/">
          <div className="flex gap-1 text-2xl font-bold">
            <img src={assets.logo_icon} alt="logo" />
            <p>Artify AI</p>
          </div>
        </NavLink>

        <div className="flex gap-5 font-semibold items-center">
          {/* Always show Pricing */}
          <NavLink
            to="/Price"
            className="bg-blue-300 p-1 text-center rounded-3xl font-semibold w-[100px]"
          >
            Pricing
          </NavLink>

          <NavLink
            to="/Login"
            onClick={handleLogin} // demo login
            className="p-1 text-center bg-black text-white w-[100px] rounded-2xl"
          >
            Login
          </NavLink>
          <NavLink
            to="/Signup"
            className="p-1 text-center bg-black text-white w-[100px] rounded-2xl"
          >
            Signup
          </NavLink>
        </div>
      </div>

      {/* ✅ Mobile Navbar */}
      <div className="sm:hidden text-2xl border border-blue-300 flex justify-around p-4 mt-3 w-[90%] m-auto rounded-2xl">
        <NavLink
          to="/"
          className="flex gap-2 text-2xl font-bold border border-white"
        >
          <img src={assets.logo_icon} alt="logo" />
          <p>Artify AI</p>
        </NavLink>
        <button onClick={hider} className="text-3xl">
          {hiden ? <GiCrossedSwords /> : <IoReorderThreeOutline />}
        </button>
      </div>

      {hiden && (
        <div className="backdrop-blur-xl text-2xl font-bold text-center grid">
          <NavLink to="/price" className="mt-3 hover:underline">
            Pricing
          </NavLink>

         
              <NavLink
                to="/Login"
                onClick={handleLogin}
                className="mt-3 hover:underline"
              >
                Login
              </NavLink>
              <NavLink to="/Signup" className="mt-3 hover:underline">
                Signup
              </NavLink>
           
        </div>
      )}
    </div>
  );
};

export default Navbar;
