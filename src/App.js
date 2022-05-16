import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../src/pages/Auth/main";
import Registration from "../src/pages/Auth/registration";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
