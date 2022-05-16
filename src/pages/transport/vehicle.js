import React from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { Container } from "@mui/material";

// export const Crops = () => {
const Vehicle = () => {
  //   return function Crops() {
  const [vehicleName, setvehicleName] = useState("");
  const [type, settype] = useState("");
  const [price, setprice] = useState("");
  const [license, setlicense] = useState("");
  const [vehicleNumber, setvehicleNumber] = useState("");
  // const [contact, setcontact] = useState("");
  const [vehicleList, setvehicleList] = useState([]);

  const addVehicle = () => {
    Axios.post("http://localhost:3001/machineReg", {
      vehicleName: vehicleName,
      type: type,
      price: price,
      license: license,
      vehicleNumber: vehicleNumber,
      // contact: contact,
    }).then(() => {
      setvehicleList([
        ...vehicleList,
        {
          vehicleName: vehicleName,
          type: type,
          price: price,
          license: license,
          vehicleNumber: vehicleNumber,
          // contact: contact,
        },
      ]);
    });
  };

  useEffect(() => {
    return () => {
      Axios.get("http://localhost:3001/machineRegdata").then((response) => {
        setvehicleList(response.data);
      });
    };
  }, []);

  const getVehicle = () => {};

  return (
    <>
      <Container>
        <Card.Header>
          <Card.Title
            as="h4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Machinery
          </Card.Title>
        </Card.Header>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Key</TableCell> */}
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">License</TableCell>
                <TableCell align="center">V.Number</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {vehicleList.map((res) => (
                <TableRow
                  key={res.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
              {row.name}
            </TableCell> */}
                  <TableCell align="center">{res.vehicleName}</TableCell>
                  <TableCell align="center">{res.type}</TableCell>
                  <TableCell align="center">{res.price}</TableCell>
                  <TableCell align="center">{res.license}</TableCell>
                  <TableCell align="center">{res.vehicleNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <br></br>
        <br></br>
        <br></br>
        <Card.Header>
          <Card.Title>
            <header className="App-header">
              <div className="Reg">
                <center>
                  <h2>Vehicle Registration</h2>
                </center>
              </div>
            </header>
          </Card.Title>
        </Card.Header>
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
        >
          <Form>
            <div className="information">
              <label>Vehicle Name:</label>
              <input
                type="text"
                onChange={(event) => {
                  setvehicleName(event.target.value);
                }}
              />

              <label>Vehicle type:</label>
              <input
                type="int"
                onChange={(event) => {
                  settype(event.target.value);
                }}
              />

              <label>Price/hr:</label>
              <input
                type="text"
                onChange={(event) => {
                  setprice(event.target.value);
                }}
              />

              <label>License Number</label>
              <input
                type="text"
                onChange={(event) => {
                  setlicense(event.target.value);
                }}
              />
              <label>Vehicle Number</label>
              <input
                type="text"
                onChange={(event) => {
                  setvehicleNumber(event.target.value);
                }}
              />
            </div>
            <div className="regbutton">
              <center>
                <button onClick={addVehicle}>Add</button>
              </center>
            </div>
            <div className="clearfix"></div>
          </Form>
        </Card.Body>
      </Container>
    </>
  );
  //   };
};

export default Vehicle;
