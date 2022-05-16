//farmer file

import React from "react";
import Axios from "axios";
import "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/App.css";
import { useEffect, useState } from "react";
import Navbar from "/Users/joshuasatlin/Documents/GitHub/untitled folder/farmalive/src/components/Navbar.jsx";

import {
  Badge,
  Button,
  Card,
  Form,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { borderColor, borderLeft, borderRight, fontFamily } from "@mui/system";

function Farmer() {
  const [farmdata, setFarmdata] = useState([]);

  const getFarmData = async () => {
    try {
      const data = await Axios.get("http://localhost:3001/farmer_details");
      console.log(data.data);
      setFarmdata(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFarmData();
  }, []);
  // Axios.get("http://localhost:3001/farmer_details").then((response) => {
  //   console.log(response.data);
  //   setFarmdata("the farmer details\n" + response.data);
  // });

  // <div className="profiledetails">
  //   <h1>Profile</h1>
  //   <input type="integer" placeholder="Type your ID" />
  // </div>;
  // //********* */
  //};

  return (
    <div>
      <Navbar />
      <header className="App-header">
        <div className="Reg">
          <center>
            <h2>Farmers Profile Details</h2>
          </center>
        </div>
      </header>
      <>
        <Container>
          <Row>
            <Col md="8">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Profile</Card.Title>
                </Card.Header>
                <div className="card-image">
                  <img
                    style={{
                      justifyContent: "space-around",
                      display: "flex",
                      width: "160px",
                      height: "160px",
                      borderRadius: "80px",
                    }}
                    src="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60"
                  />
                </div>
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
                  <Form
                    style={{
                      margintop: "10px",
                      marginleft: "20px",
                      maxwidth: "200px",
                      display: "block",
                      padding: "10px",
                    }}
                  >
                    <Row>
                      {farmdata.map((res) => {
                        return (
                          <div>
                            <Col className="px-1" md="8">
                              <Form.Group>
                                <label>Username</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.first_name}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            <Col className="pr-1" md="8">
                              <Form.Group>
                                <label>First Name</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.first_name}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            <Col className="pl-1" md="8">
                              <Form.Group>
                                <label>Second Name</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.second_name}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            {/* <Col md="12">
                              <Form.Group>
                                <label>Address</label>
                                <br></br>
                                <Form.Control
                                  defaultValue="Address"
                                  placeholder="Home Address"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col> */}

                            <Col className="pr-1" md="8">
                              <Form.Group>
                                <label>State</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.state}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            <Col className="px-1" md="8">
                              <Form.Group>
                                <label>Taluk</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.taluk}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            <Col className="pl-1" md="8">
                              <Form.Group>
                                <label>Contact</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.contact}
                                  type="integer"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            <Col className="pl-1" md="8">
                              <Form.Group>
                                <label>Adhaar Number</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.adhaarNumber}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            <Col className="pl-1" md="8">
                              <Form.Group>
                                <label>Type of Soil</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.type_of_soil}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            <Col className="pl-1" md="8">
                              <Form.Group>
                                <label>Land Size</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.size_of_land}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>

                            <Col className="pl-1" md="8">
                              <Form.Group>
                                <label>Katha Number</label>
                                <br></br>
                                <Form.Control
                                  placeholder={res.katha_No}
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </div>
                        );
                      })}
                    </Row>

                    {/* <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Update Profile
                    </Button> */}

                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <Card.Body
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  {/* <div className="author">
                    <p className="description">ABOUT ME</p>
                  </div>
                  <p className="description text-center">
                    FARM ALIVE <br></br>
                    Bangalore 560029<br></br>
                    FARMER "
                  </p> */}
                </Card.Body>
                <hr></hr>
                <div className="button-container mr-auto ml-auto">
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-google-plus-square"></i>
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default Farmer;
