import React from "react";
import "../../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

//import "./pages/loginpage.css";
import Home from "../../pages/transport/Home";
// import Register from "./pages/register";
import Profile from "../../pages/transport/Profile";
// import Seller from "./pages/seller";
// import Market from "./pages/market";
// import Login from "./pages/Login";
// import Hookstest from "./pages/hookstest";
// import MachinHM from "./pages/machinHM";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// import Navbar from "/Components/navbar";

function App() {
  const user = true;
  return (
    <div className="apps">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Register" element={<Register />} /> */}
        <Route path="/Profile" element={<Profile />} />
        {/* <Route path="/seller" element={<Seller />} /> */}
        {/* <Route path="/market" element={<Market />} /> */}
        {/* <Route path="/machinHM" element={<MachinHM />} /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/Hookstest" element={<Login />} /> */}
        {/* <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
