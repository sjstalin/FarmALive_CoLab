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
const Crops = () => {
  //   return function Crops() {
  const [name, set_name] = useState("");
  const [crop, set_crop] = useState("");
  const [taluk, settaluk] = useState("");
  const [address, setaddress] = useState("");
  const [quantity, setquantity] = useState(0);
  const [phonenumber, setphone] = useState(0);
  const [CropList, setCropList] = useState([]);
  const addCrop = () => {
    Axios.post("http://localhost:3001/createcrops", {
      name: name,
      crop: crop,
      taluk: taluk,
      address: address,
      quantity: quantity,
      phonenumber: phonenumber,
    }).then(() => {
      setCropList([
        ...CropList,
        {
          name: name,
          crop: crop,
          taluk: taluk,
          address: address,
          quantity: quantity,
          phonenumber: phonenumber,
        },
      ]);
    });
  };
  useEffect(() => {
    return () => {
      Axios.get("http://localhost:3001/Cropsdata").then((response) => {
        setCropList(response.data);
      });
    };
  }, []);

  const getCrops = () => {};

  return (
    <>
      <Container>
        <Card.Header>
          <Card.Title
            as="h4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Products Available
          </Card.Title>
        </Card.Header>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Key</TableCell> */}
                <TableCell align="center">Farmer Name</TableCell>
                <TableCell align="center">Crop</TableCell>
                <TableCell align="center">Taluk</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Phonenumber</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {CropList.map((res) => (
                <TableRow
                  key={res.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
              {row.name}
            </TableCell> */}
                  <TableCell align="center">{res.name}</TableCell>
                  <TableCell align="center">{res.crop}</TableCell>
                  <TableCell align="center">{res.taluk}</TableCell>
                  <TableCell align="center">{res.address}</TableCell>
                  <TableCell align="center">{res.quantity}</TableCell>
                  <TableCell align="center">{res.phonenumber}</TableCell>
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
                  <h2>Order Now !</h2>
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
              {/* <label>Farmer Name:</label>
              <input
                type="text"
                onChange={(event) => {
                  set_name(event.target.value);
                }}
              /> */}

              <label>Crop:</label>
              <input
                type="int"
                onChange={(event) => {
                  set_crop(event.target.value);
                }}
              />

              <label>Taluk:</label>
              <input
                type="text"
                onChange={(event) => {
                  settaluk(event.target.value);
                }}
              />

              {/* <label>Address</label>
              <input
                type="text"
                onChange={(event) => {
                  setaddress(event.target.value);
                }}
              /> */}
              <label>Quantity</label>
              <input
                type="text"
                onChange={(event) => {
                  setquantity(event.target.value);
                }}
              />
              {/* <label>Phonenumber</label>
              <input
                type="text"
                onChange={(event) => {
                  setphone(event.target.value);
                }}
              /> */}
            </div>
            <div className="regbutton">
              <center>
                <button onClick={addCrop}>Search</button>
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

export default Crops;
