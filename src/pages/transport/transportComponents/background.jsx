import Box from '@material-ui/core/Box';
import React from  'react';
import videoBg from "../../transport/transportComponents/videoBgmachine.mp4"
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from 'react-player';

import Typography from '@material-ui/core/Typography';


// import {Registration} from "../../Auth/registration";
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '80vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    paddingBottom: theme.spacing(4),
    color: "#fff",
    display: "flex",
    alignContent:"center",
    justifyContent: "center",
    fontFamily:"Nunito",
    padding: "110px",
    fontSize: "90px",
    
  },
}));

const Background = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ReactPlayer
        url={videoBg}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
          
        >
          <Typography  variant="h3" component="h1" className={classes.title}>
            Machinary Portal
          </Typography>
          {/* <Button color="primary" variant="contained">
            Click Me
          </Button> */}
        </Box>
      </div>
    </section>


  );
};

export default Background;