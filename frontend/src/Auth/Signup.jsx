import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

const Signup = () => {

   const navigate = useNavigate();
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

  let uploaddata = async() => {
    try {
       let postdata = await axios.post(import.meta.env.VITE_SIGNUP_API,input)
        console.log(postdata.status)
        if(postdata.data.status==true){
      
          navigate("/login"); 
        }
    } catch (error) {
      console.log("kuch too error ha signup may")
    }
      
  };

  let submit = (e) => {
    e.preventDefault()
    setinput((pre)=>({...pre,input}))
    uploaddata()
    setinput(" ")
     
    
  };

  return (
    <div>
      <div className="border border-black w-[384px] h-[433px] m-auto text-center rounded-2xl mt-5 ">
        <img src={assets.logo_icon} alt="" className="m-auto mt-5 h-15" />
        <p className="text-3xl font-semibold mt-6">Signup</p>
        <p>Create your free account</p>

        <form
          onSubmit={submit}
          className=" text-center mt-5 flex flex-col [&>input]:w-[295px] [&>input]:h-[42px] [&>input]:rounded-2xl [&>input]:mt-2 [&>input]:m-auto text-xl [&>input]:text-center"
        >
          <input
            type="email"
            name="email"
            value={input.email||""}
            onChange={handler}
            required
            placeholder="Email ID"
            className="border border-blue-200 "
          />
          <input
            type="text"
            name="name"
            value={input.name||""}
            onChange={handler}
            required
            placeholder="Full Name"
            className="border border-blue-200 "
          />
          <input
            type="text"
            name="password"
            value={input.password||""}
            onChange={handler}
            required
            placeholder="Password"
            className="border border-blue-200"
          />
          <input type="submit" className="bg-blue-600 text-white cursor-pointer" />
        </form>
        <p className="mt-2">Already Have a account <NavLink to='/login' className='font-bold'> Login</NavLink></p>
      </div>
    </div>
  );
};

export default Signup;
