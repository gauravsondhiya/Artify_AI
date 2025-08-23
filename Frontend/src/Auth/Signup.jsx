import React, { useState } from "react";
import { assets } from "../assets/assets";

const Signup = () => {
  let [input, setinput] = useState({
    email: "",
    name: "",
    password: "",
  });

  let handler = (e) => {
    let { name, value } = e.target;
    setinput((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  let uploaddata = async () => {
    let method = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: input.email,
        name: input.name,
        password: input.password,
      }),
    };
    let apifetch = await fetch("http://localhost:3000/signup", method);

    let data = await apifetch.json();

    console.log(input);
  };

  let submit = (e) => {
    e.preventDefault();
    uploaddata();
  };
  return (
    <div>
      <div className="border border-black w-[384px] h-[433px] m-auto text-center rounded-2xl mt-5 ">
        <img src={assets.logo_icon} alt="" className="m-auto mt-5 h-15" />
        <p className="text-3xl font-semibold mt-6">Signup</p>
        <p>Welcome back! Please sign in to continue</p>

        <form
          onSubmit={submit}
          className=" text-center mt-5 flex flex-col [&>input]:w-[295px] [&>input]:h-[42px] [&>input]:rounded-2xl [&>input]:mt-2 [&>input]:m-auto text-xl [&>input]:text-center [&>input]: "
        >
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handler}
            required
            placeholder="Email ID"
            className="border border-blue-200 "
          />
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handler}
            required
            placeholder="Full Name"
            className="border border-blue-200 "
          />
          <input
            type="Password"
            name="password"
            value={input.password}
            onChange={handler}
            required
            placeholder="Password"
            className="border border-blue-200"
          />
          <input type="submit" className="bg-blue-600 text-white" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
