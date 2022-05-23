import React from "react";
import Axios from "axios";
import "../App.css";
import { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {
  const [first_name, setfirst_name] = useState("");
  const [second_name, setsecond_name] = useState("");
  const [age, setAge] = useState(0);
  const [state, setstate] = useState("");
  const [taluk, settaluk] = useState("");
  const [contact, setcontact] = useState("");
  const [adhaarNumber, setadhaarNumber] = useState(0);

  const [type_of_soil, settype_of_soil] = useState("");
  const [size_of_land, setsize_of_land] = useState(0);
  const [katha_No, setkatha_No] = useState(0);

  //crop name
  //size of land used
  //type of irrigation
  //expected harvest month

  //name
  //type of vehicle
  //area
  //contact number
  //vehicle number
  //Licence number

  const [FarmerList, setFarmerList] = useState([]);

  const addFarmer = () => {
    Axios.post("http://localhost:3001/create", {
      first_name: first_name,
      second_name: second_name,
      age: age,
      state: state,
      taluk: taluk,
      contact: contact,
      adhaarNumber: adhaarNumber,
      type_of_soil: type_of_soil,
      size_of_land: size_of_land,
      katha_No: katha_No,
    }).then(() => {
      setFarmerList([
        ...FarmerList,
        {
          first_name: first_name,
          second_name: second_name,
          age: age,
          state: state,
          taluk: taluk,
          contact: contact,
          adhaarNumber: adhaarNumber,
          type_of_soil: type_of_soil,
          size_of_land: size_of_land,
          katha_No: katha_No,
        },
      ]);
    });
  };

  const [farmdata, setfarmdata] = useState("");
  const getFarmer = () => {
    Axios.get("http://localhost:3001/farmer_details").then((response) => {
      setFarmerList(response.data);
      setfarmdata(response.data);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="Reg">
          <center>
            <h2>Registration</h2>
          </center>
        </div>
      </header>

      <div className="information">
        <label>First Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setfirst_name(event.target.value);
          }}
        />

        <label>Second Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setsecond_name(event.target.value);
          }}
        />

        <label>Age:</label>
        <input
          type="integer"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />

        <label>State:</label>
        <input
          type="text"
          onChange={(event) => {
            setstate(event.target.value);
          }}
        />

        <label>Taluk:</label>
        <input
          type="text"
          onChange={(event) => {
            settaluk(event.target.value);
          }}
        />

        <label>Contact Number:</label>
        <input
          type="integer"
          onChange={(event) => {
            setcontact(event.target.value);
          }}
        />

        <label>Adhaar number:</label>
        <input
          type="text"
          onChange={(event) => {
            setadhaarNumber(event.target.value);
          }}
        />
        <label>Type of Soil:</label>
        <input
          type="text"
          onChange={(event) => {
            settype_of_soil(event.target.value);
          }}
        />

        <label>Size of Land:</label>
        <input
          type="int"
          onChange={(event) => {
            setsize_of_land(event.target.value);
          }}
        />

        <label>Katha Number :</label>
        <input
          type="text"
          onChange={(event) => {
            setkatha_No(event.target.value);
          }}
        />
      </div>
      <div className="regbutton">
        <center>
          <button onClick={addFarmer}>Register</button>

          <p>{farmdata}</p>
        </center>
      </div>
    </div>
  );
}
export default Register;
