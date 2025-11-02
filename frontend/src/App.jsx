import { Routes, Route } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Search from "./Image_generate/Search";
import Price from "./Price/Price";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Bg from "./Bgremove/Bg";
import ProtectedRoute from "./Auth/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search" element={<Search />} /> */}
        <Route
          path="/search"
          element={
            <ProtectedRoute>
             <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bgremove"
          element={
            <ProtectedRoute>
              <Bg />
            </ProtectedRoute>
          }
        />
        <Route path="/price" element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
