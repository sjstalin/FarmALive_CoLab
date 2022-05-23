import React from "react";
import Navbar from "../../components/Navbar";
import Axios from "axios";
import "../../App.css";
import Crops from "./crops";
import Footer from "../../components/Footer/Footer";
import "../farmer/Home.css";
import Background from "./farmerComponentes/background";
import MachineBooking from "../farmer/machineBooking";

// import Register from "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/pages/register.js";

// import Table from "react-bootstrap/Table";

function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <Crops />
      <MachineBooking />
      <Footer />
    </div>
  );
}

export default Home;
