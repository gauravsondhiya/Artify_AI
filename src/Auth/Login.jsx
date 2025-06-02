import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="border border-black w-[384px] h-[433px] m-auto text-center rounded-2xl mt-5 ">
            <p className="text-3xl font-semibold mt-[25%]">Login</p>
            <p>Welcome back! Please sign in to continue</p>
            <form
              
              className=" text-center mt-5 flex flex-col [&>input]:w-[295px] [&>input]:h-[42px] [&>input]:rounded-2xl [&>input]:mt-2 [&>input]:m-auto text-xl [&>input]:text-center [&>input]: "
            >
              <input
                type="Email ID"
                placeholder="Email ID"
                className="border border-blue-200 "
              />
              <input
                type="Password"
                placeholder="Password"
                className="border border-blue-200"
              />
              <input type="submit" className="bg-blue-600 text-white" />
            </form>
          </div>
    </div>
  )
}

export default Login
