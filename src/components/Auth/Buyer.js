import React from "react";
import "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/App.css";

import Home from "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/pages/buyer/Home.js";
import Profile from "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/pages/farmer/Profile.js";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="apps">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
