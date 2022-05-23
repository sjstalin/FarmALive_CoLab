import React from "react";
import "../../App.css";

import Home from "../../pages/farmer/Home";
import Profile from "../src/pages/farmer/Profile";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="apps">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route exact path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
