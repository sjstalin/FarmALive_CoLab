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
import { Button, Card, Form, Row, Col, Dropdown } from "react-bootstrap";
import { Container } from "@mui/material";
// import CDropdown from "@popperjs/core";

// export const Crops = () => {
const Crops = () => {
  //   return function Crops() {
  const [crop_name, setcrop_name] = useState("");
  const [quantity, setquantity] = useState(0);
  const [irrigation, setirrigation] = useState("");
  const [month_harvest, setmonth_harvest] = useState("");

  const [CropList, setCropList] = useState([]);

  const addCrop = () => {
    Axios.post("http://localhost:3001/createcrops", {
      crop_name: crop_name,
      quantity: quantity,
      irrigation: irrigation,
      month_harvest: month_harvest,
    }).then(() => {
      setCropList([
        ...CropList,
        {
          crop_name: crop_name,
          quantity: quantity,
          irrigation: irrigation,
          month_harvest: month_harvest,
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
            style={{ display: "flex", justifyContent: "left", padding: "20px" }}
          >
            CURRENT CROPS IN FARM
          </Card.Title>
        </Card.Header>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Key</TableCell> */}
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">quantity</TableCell>
                <TableCell align="center">Irrigation type</TableCell>
                <TableCell align="center">Month Harvest</TableCell>
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
                  <TableCell align="center">{res.id}</TableCell>
                  <TableCell align="center">{res.crop_name}</TableCell>
                  <TableCell align="center">{res.quantity}</TableCell>
                  <TableCell align="center">{res.irrigation}</TableCell>
                  <TableCell align="center">{res.month_harvest}</TableCell>
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
                  <h2>Crop Registration</h2>
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
              <label>Crop Name:</label>
              <input
                type="text"
                onChange={(event) => {
                  setcrop_name(event.target.value);
                }}
              />

              <label>quantity:</label>
              <input
                type="int"
                onChange={(event) => {
                  setquantity(event.target.value);
                }}
              />

              <label>Type of Irrigation:</label>
              <input
                type="text"
                onChange={(event) => {
                  setirrigation(event.target.value);
                }}
              />

              <label>Month Harvest</label>
              <input
                type="text"
                onChange={(event) => {
                  setmonth_harvest(event.target.value);
                }}
              />
              {/* <Dropdown>
                <Dropdown.Toggle color="secondary">Irrigation</Dropdown.Toggle>

                <Dropdown.Menu
                  onChange={(event) => {
                    setirrigation(event.target.value);
                  }}
                >
                  <Dropdown.Item value="Drip">Drip</Dropdown.Item>
                  <Dropdown.Item value="Sprinkler">Sprinkler</Dropdown.Item>
                  <Dropdown.Item value="Surface">Surface</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
            <div className="regbutton">
              <center>
                <button onClick={addCrop}>Update</button>
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
