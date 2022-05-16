import React from "react";
//import "./App1.css";
import { stockData } from "./datamachine.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";
import { useState } from "react";
export const Stocks = () => {
  const [cart, setcart] = useState([]);
  const addTocart = (Stocks) => {
    setcart([...cart, Stocks]);
  };
  return (
    <>
      <header>
        <button>Book({cart.length})</button>
      </header>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Area</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Book </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.area}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">
                  <Button
                    className="btn-fill pull-right"
                    onClick={() => addTocart(Stocks)}
                    type="submit"
                    variant="info"
                  >
                    BOOK
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
