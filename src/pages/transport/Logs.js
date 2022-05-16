import React from "react";
//import "./App1.css";
import { logData } from "./log";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const Logs = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">VehicleType</TableCell>
              <TableCell align="center">To</TableCell>
              <TableCell align="center">From</TableCell>
              <TableCell align="center">id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.Vehicletype}</TableCell>
                <TableCell align="center">{row.from}</TableCell>
                <TableCell align="center">{row.to}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
