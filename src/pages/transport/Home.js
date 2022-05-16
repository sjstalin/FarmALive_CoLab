import React from "react";
import Navbar from "../../components/Navbar";
import Axios from "axios";
import "../../App.css";
import { useState } from "react";
import { Trans } from "./Trans";
import { Logs } from "./Logs";
import Vehicle from "./vehicle";
// import Table from "react-bootstrap/Table";

import {
  Button,
  Card,
  //Navbar,
  Form,
  Row,
  Col,
} from "react-bootstrap";

function Home() {
  return (
    <div>
      <Navbar />

      <header className="App-header">
        <div className="Reg">
          <center>
            <p className="card-category">Welcome to Home Page</p>
          </center>
        </div>
      </header>

      <Vehicle />

      <br></br>
      <br></br>
      <br></br>
      <Card.Header>
        <Card.Title>
          <header className="App-header">
            <div className="Reg">
              <center>Log Record</center>
            </div>
          </header>
        </Card.Title>
      </Card.Header>
      <Logs />

      <br></br>
      <br></br>
      <br></br>
      <Card.Header>
        <Card.Title
          as="h4"
          style={{ justifyContent: "space-around", display: "flex" }}
        >
          Request!
        </Card.Title>
      </Card.Header>
      <Trans />
      <Card.Body
        style={{
          color: "blue",
          fontsize: "50px",
          fontFamily: "Bodoni 72 Oldstyle",
          justifyContent: "space-around",
          display: "flex",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
          borderTop: "1px solid grey",
          borderLeft: "10px solid grey",
          borderRight: "10px solid grey",
        }}
      ></Card.Body>
    </div>
  );
}

export default Home;
