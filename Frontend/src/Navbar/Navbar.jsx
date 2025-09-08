import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router";
import { IoReorderThreeOutline } from "react-icons/io5";
import { GiCrossedSwords } from "react-icons/gi";

const Navbar = () => {
  const [hiden, sethiden] = useState(false);
  const [user, setUser] = useState(null); // ✅ user state
  const [coins, setCoins] = useState(50); // example coins

  // ✅ check if user is already logged in (localStorage)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const hider = () => sethiden(!hiden);

  const handleLogin = () => {
    // fake login data (replace with your real auth)
    const loggedUser = {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/40",
    };
    setUser(loggedUser);
    localStorage.setItem("user", JSON.stringify(loggedUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
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

          {/* Show Login/Signup if NOT logged in */}
          {!user && (
            <>
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
            </>
          )}

          {/* ✅ Show Avatar + Coins if logged in */}
          {user && (
            <div className="flex items-center gap-4">
              <span className="font-semibold text-yellow-600">{coins} 🪙</span>
              <img
                src={user.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full border"
              />
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
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

          {/* Show login/signup OR avatar + coins */}
          {!user ? (
            <>
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
            </>
          ) : (
            <div className="flex flex-col items-center mt-3 gap-2">
              <span className="text-yellow-600">{coins} 🪙</span>
              <img
                src={user.avatar}
                alt="avatar"
                className="w-14 h-14 rounded-full border"
              />
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
