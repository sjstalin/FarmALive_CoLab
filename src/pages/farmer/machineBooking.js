import React from "react";

import "../../App.css";
import { Stocks } from "./Stock";

import {
  Button,
  Card,
  //Navbar,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Container } from "@mui/material";

const MachineBooking = () => {
  return (
    <Container>
      <Card.Header>
        <Card.Title>
          <header className="App-header">
            <div className="Reg">
              <center>
                <h2>Machine Booking</h2>
              </center>
            </div>
          </header>
        </Card.Title>
      </Card.Header>
      <thead>
        <tr>
          <th>
            <center>Field cultivator</center>
          </th>
          <br></br>
          <th>
            <center>Baler</center>
          </th>
          <br></br>
          <th>
            <center>Wheel tractor</center>
          </th>
          <br></br>
          <th>
            <center>Seeders</center>
          </th>
          <br></br>
          <th>
            <center>Planter</center>
          </th>
          <th>
            <center>Plougher</center>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "20px",
                padding: "10px",
              }}
              src="https://images.unsplash.com/photo-1565647952915-9644fcd446a4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
            />
          </td>
          <br></br>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "20px",
                padding: "10px",
              }}
              src="https://images.unsplash.com/photo-1631364963450-cca219396903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWluZyUyMG1hY2hpbmVzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            />
          </td>
          <br></br>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "20px",
                padding: "10px",
              }}
              src="https://media.istockphoto.com/photos/farmer-with-tractor-seeding-crops-at-field-picture-id492774776?b=1&k=20&m=492774776&s=170667a&w=0&h=5XxXlsYeRJN-VoEQw2egPjvecGEaYitPGp0w3B6NS50="
            />
          </td>
          <br></br>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "20px",
                padding: "10px",
              }}
              src="https://media.istockphoto.com/photos/harvesting-picture-id182855744?s=612x612"
            />
          </td>
          <br></br>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "20px",
                padding: "10px",
              }}
              src="https://media.istockphoto.com/photos/detail-of-tractor-sprayer-picture-id462836087?k=20&m=462836087&s=612x612&w=0&h=vsoZW-VF_mmhO9zPSL5XC_C4EbVxymZuy_bo-rRyE9g="
            />
          </td>
          <td>
            {" "}
            <img
              style={{
                justifyContent: "space-around",
                display: "flex",
                width: "200px",
                height: "200px",
                borderRadius: "20px",
                padding: "10px",
              }}
              src="https://media.istockphoto.com/photos/tractor-baling-straw-picture-id154917779?k=20&m=154917779&s=612x612&w=0&h=l77kln7-yyA-JqyIqsocXEw-vezJ7uRFg7l8V-XWQYY="
            />
          </td>
          <br></br>
        </tr>
      </tbody>
      <br></br>
      <br></br>
      <br></br>
      <Card.Header>
        <Card.Title
          as="h4"
          style={{ justifyContent: "space-around", display: "flex" }}
        >
          BOOK NOW!
        </Card.Title>
      </Card.Header>
      <Stocks />
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
          <Row>
            <Col className="pr-1" md="4">
              <Form.Group>
                <label> Machine Type</label>
                <br></br>
                <Form.Control
                  defaultValue="Mike"
                  placeholder="Crop Name"
                  type="text"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col className="px-1" md="4">
              <Form.Group>
                <label>No of Hours</label>
                <br></br>
                <Form.Control
                  defaultValue="Andrew"
                  placeholder="Size of Land"
                  type="text"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col className="pl-1" md="4">
              <Form.Group>
                <label>Date</label>
                <br></br>
                <Form.Control
                  placeholder="Type of Farming"
                  type="text"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button className="btn-fill pull-right" type="submit" variant="info">
            BOOK
          </Button>
          <div className="clearfix"></div>
        </Form>
      </Card.Body>
    </Container>
  );
};
export default MachineBooking;
