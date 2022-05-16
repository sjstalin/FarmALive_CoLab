import { Login, ShoppingCartOutlined, Typograph, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
// import Badge from "@mui/material/Badge";
import { mobile } from "react-responsive";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
//import Categories from "./Categories";

const Container = styled.div`
  height: 60px;
  padding:10px;
  border:10px;
  colour:black;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 25px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const Links = styled.h3`
  font-size: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Farm Alive</Logo>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Links>Home</Links>
          </Link>
          <Link to="/Profile" style={{ textDecoration: "none", color: "black" }}>
          <Links>Profile</Links>
          </Link>
          {/* <Link to="../market" style={{ textDecoration: "none", color: "black" }}>
          <Links>Market</Links>
          </Link>
          <Link to="../seller" style={{ textDecoration: "none", color: "black" }}>
          <Links>Seller</Links>
          </Link>
          <Link to="../machinHM" style={{ textDecoration: "none", color: "black" }}>
          <Links>TransportHM</Links>
          </Link>
          <Link to="../Login" style={{ textDecoration: "none", color: "black" }}>Login</Link> */}
        </Center>
        <Right>



          <MenuItem >
          <ul>
                  <Button><Link to="/Login" style={{ textDecoration: "none", color: "black" }}>LogOut</Link></Button>
                </ul>
          </MenuItem>
          <MenuItem>  
               <ul>
                  <Button><Link to="../register" style={{ textDecoration: "none", color: "black" }}>Register </Link></Button>
                </ul>
                </MenuItem>
 
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
