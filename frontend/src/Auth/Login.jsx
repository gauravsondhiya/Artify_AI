import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  let [inputval, setinputval] = useState({
    email: "",
    password: "",
  });

  let handler = (e) => {
    let { name, value } = e.target;
    setinputval((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  let uploaddata = () => {
   
  };

  let submited = (event) => {
    event.preventDefault();
    uploaddata();
  };

  return (
    <div>
      <div className="border border-black w-[384px] h-[433px] m-auto text-center rounded-2xl mt-5 ">
        <img src={assets.logo_icon} alt="" className="m-auto mt-5 h-15" />
        <p className="text-3xl font-semibold mt-6">Login</p>
        <p>Welcome back! Please sign in to continue</p>
        <form
          className=" text-center mt-5 flex flex-col [&>input]:w-[295px] [&>input]:h-[42px] [&>input]:rounded-2xl [&>input]:mt-2 [&>input]:m-auto text-xl [&>input]:text-center"
          onSubmit={submited}
        >
          <input
            type="text"
            placeholder="Email ID"
            required
            name="email"
            className="border border-blue-200 "
            value={inputval.email}
            onChange={handler}
          />
          <input
            type="Password"
            required
            placeholder="Password"
            name="password"
            className="border border-blue-200"
            value={inputval.password}
            onChange={handler}
          />
          <input type="submit" className="bg-blue-600 text-white cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default Login;
