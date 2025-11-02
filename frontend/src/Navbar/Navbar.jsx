import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router";
import { IoReorderThreeOutline } from "react-icons/io5";
import { GiCrossedSwords } from "react-icons/gi";
import UserContext from "../Context/UserContext.js";

const Navbar = () => {
  const [hiden, sethiden] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const hider = () => sethiden(!hiden);
  console.log(user);
  const handleLogin = () => {};

  const handleLogout = () => {
    setUser({ status: false, username: "" });
    localStorage.removeItem("token");
    console.log("logout");
  };

  return (
    <div>
      {/* ✅ Desktop Navbar */}
      <div className="hidden sm:block  sm:flex justify-around  items-center p-3 border border-blue-300 mt-4 w-[90%] m-auto rounded-2xl">
        <NavLink to="/">
          <div className="flex gap-1 text-2xl font-bold">
            <img src={assets.logo_icon} alt="logo" />
            <p>Artify AI</p>
          </div>
        </NavLink>

        {user.status ? (
          <div className="flex items-center gap-5 text-xl font-bold">
            <div>{user.username}</div>
            <button
              className="border p-3 bg-blue-400 text-white  rounded-2xl hover:bg-gray-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className=" flex  gap-6  font-semibold items-center text-xl font-bold">
            {/* Always show Pricing */}
            <NavLink
              to="/Price"
              className="bg-blue-300 p-2 text-center rounded-3xl font-semibold w-[100px] hover:bg-gray-300"
            >
              Pricing
            </NavLink>

            <NavLink
              to="/Login"
              onClick={handleLogin} // demo login
              className="p-2 text-center bg-black text-white w-[100px] rounded-2xl hover:bg-gray-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/Signup"
              className="p-2 text-center bg-black text-white w-[100px] rounded-2xl hover:bg-gray-300"
            >
              Signup
            </NavLink>
          </div>
        )}
      </div>

      {/* ✅ Mobile Navbar */}
      <div className="sm:hidden text-2xl border border-blue-300 flex justify-around p-4 mt-3 w-[90%] m-auto rounded-2xl">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold border border-white"
        >
          <img src={assets.logo_icon} alt="logo" />
          <p>Artify AI</p>
        </NavLink>
        {user.status ? (
           <div className="flex items-center gap-2 text-xl font-bold">
            <div>{user.username}</div>
            <button
              className="border p-2 bg-blue-400 text-white  rounded-2xl hover:bg-gray-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ):<button onClick={hider} className="text-3xl">
            {hiden ? <GiCrossedSwords /> : <IoReorderThreeOutline />}
          </button>}
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
