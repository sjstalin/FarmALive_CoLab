import React from "react";
//import "./App1.css";
import { detailData } from "./detail.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";
import { useState } from "react";
export const Det = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Crop</TableCell>
              <TableCell align="center">Taluk</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Phonenumber</TableCell>
              <TableCell align="center">Buy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {detailData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.crop}</TableCell>
                <TableCell align="center">{row.taluk}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.phonenumber}</TableCell>
                <TableCell align="center">
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    BUY
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
