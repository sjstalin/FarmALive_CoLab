import { Login, ShoppingCartOutlined, Typograph, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
// import Badge from "@mui/material/Badge";
import { mobile } from "react-responsive";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

//import Categories from "./Categories";

const useStyles = makeStyles((theme) => ({

  appbarTitle: {
    flexGrow: "1",
    fontFamily: "Nunito",
    color: "#fff",
  },

  colorText: {
    color: "#5AFF3D",
  },

}));


const Container = styled.div`
  height: 60px;
  padding:10px;
  border:10px;
  colour:black;
  justify-content: space-around;
  height: 10vh;
  background: rgb(0, 33, 65);
  margin: 0;
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
  text-decoration: none;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 1rem;
  font-Family: "Nunito";

`;

const Logo = styled.h1`
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
`;
 


const MenuItem = styled.div`
  font-size: 10px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  font-size: 1.6rem;
`;


// ************************************************************


// ************************************************************



const Navbar = () => {
  const classes = useStyles();
  return (
    <Container>
      <Wrapper>
        <Left>
        <h1 className={classes.appbarTitle}>
            Farm<span className={classes.colorText}>Alive.</span>
          </h1>
        </Left>
        <Center>
          <Link to="/Home" style={{ textDecoration: "none", color: "black" }}>
            <Links className="holder">Home</Links>
          </Link>
          <Link to="/Profile" style={{ textDecoration: "none", color: "black" }}>
          <Links>Profile</Links>
          </Link>
           <Link to="../market" style={{ textDecoration: "none", color: "black" }}>
          <Links>About</Links>
          </Link>
          <Link to="../seller" style={{ textDecoration: "none", color: "black" }}>
          <Links>Help</Links>
          </Link>
          <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <Links>Register</Links>
          </Link>
          

          <Link to="/Logout" style={{ textDecoration: "none", color: "black" }}>
          <Links>Logout</Links>
          </Link>

        </Center>

      </Wrapper>
    </Container>
  );
};

export default Navbar;
