import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";
import Price from "./Price/Price";
import Navbar from "./Navbar/Navbar";
import Signup from "./Auth/Signup";
import { Routes, Route } from "react-router";
import Login from "./Auth/Login";
import Bg from "./Bgremove/Bg";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bgremove" element={<Bg/>} />
        <Route path="/price" element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
