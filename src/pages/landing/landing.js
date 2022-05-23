import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "../landing/Header";
import PlaceToVisit from "../landing/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundClip: `url(${process.env.PUBLIC_URL + "/assets/bgv1.mp4"})`,
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <PlaceToVisit />
      </div>
    </div>
  );
}
