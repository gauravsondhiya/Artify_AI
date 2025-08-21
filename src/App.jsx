import React from 'react'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Search from './Search/Search'
import Price from './Price/Price'
import Navbar from './Navbar/Navbar'
import Signup from './Auth/Signup'
import { Routes, Route } from "react-router"
import Login from './Auth/Login'
const App = () => {
  return (
    <div>
     
     <Navbar/>
    {/* <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/Search" element={<Search />} /> 
      <Route path="/Price" element={<Price />} /> 
      <Route path="/Login" element={<Login />} /> 
      <Route path="/Login" element={<Signup />} /> 
    </Routes>
     
     <Footer/>
     */}
     
    </div>
  )
}

export default App
