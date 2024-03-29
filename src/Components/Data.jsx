import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    padding: "0px 30px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      textAlign: "center",
      padding: "0px 30px",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "space-around",
      textAlign: "center",
      padding: "0px 30px",
    },
  },
  data: {
    padding: "10px 0px",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      padding: "10px 0px",
      alignItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10px 0px",
      alignItems: "center",
    },
  },
  heading: {
    //
    [theme.breakpoints.up("md")]: {
      paddingBottom: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "30px",
    },
  },
  Price: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#fff",
    paddingBottom: "10px",
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      fontWeight: "400",
      color: "#fff",
      paddingBottom: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "58px",
      fontWeight: "400",
      color: "#fff",
      paddingBottom: "10px",
    },
  },
  heading_Bottom: {
    color: "#fff",
    opacity: ".45",
    fontSize: "8px",
    fontWeight: "300",
    letterSpacing: ".75",
    [theme.breakpoints.up("md")]: {
      color: "#fff",
      opacity: ".45",
      fontSize: "8px",
      fontWeight: "300",
      letterSpacing: ".75",
    },
    [theme.breakpoints.up("lg")]: {
      color: "#fff",
      opacity: ".45",
      fontSize: "16px",
      fontWeight: "300",
      letterSpacing: ".75",
    },
  },
  heading_Top: {
    color: "#fff",
    opacity: ".45",
    fontSize: "11px",
    fontWeight: "300",
    letterSpacing: ".75",
    [theme.breakpoints.up("md")]: {
      color: "#fff",
      opacity: ".45",
      fontSize: "14px",
      fontWeight: "300",
      letterSpacing: ".75",
    },
    [theme.breakpoints.up("lg")]: {
      color: "#fff",
      opacity: ".45",
      fontSize: "28px",
      fontWeight: "300",
      letterSpacing: ".75",
    },
  },
  main_Heading: {
    color: "#5dc7c2",
    fontSize: "14px",
    fontWeight: "400",
    [theme.breakpoints.up("md")]: {
      color: "#5dc7c2",
      fontSize: "14px",
      fontWeight: "400",
    },
    [theme.breakpoints.up("lg")]: {
      color: "#5dc7c2",
      fontSize: "40px",
      fontWeight: "400",
    },
  },
  sub_Heading: {
    color: "#fff",
    opacity: ".45",
    fontSize: "10px",
    fontWeight: "300",
    letterSpacing: ".75",
    [theme.breakpoints.up("md")]: {
      color: "#fff",
      opacity: ".45",
      fontSize: "10px",
      fontWeight: "300",
      letterSpacing: ".75",
    },
    [theme.breakpoints.up("lg")]: {
      color: "#fff",
      opacity: ".45",
      fontSize: "20px",
      fontWeight: "300",
      letterSpacing: ".75",
    },
  },
}));

const Data = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid container item lg={12} md={12} xs={12} className={classes.data}>
        <Grid item lg={2} md={2} xs={2}>
          <Typography className={classes.main_Heading}>0.29%</Typography>
          <Typography className={classes.sub_Heading}>5 Mins</Typography>
        </Grid>
        <Grid item lg={2} md={2} xs={2}>
          <Typography className={classes.main_Heading}>0.7%</Typography>
          <Typography className={classes.sub_Heading}>1 Hour</Typography>
        </Grid>
        <Grid item lg={4} md={4} xs={4} className={classes.heading}>
          <Typography className={classes.heading_Top}>
            Best Price to Trade
          </Typography>
          <Typography className={classes.Price}>₹ 43,73,304</Typography>
          <Typography className={classes.heading_Bottom}>
            Average BTC/INR net price including commission
          </Typography>
        </Grid>
        <Grid item lg={2} md={2} xs={2}>
          <Typography className={classes.main_Heading}>8.64%</Typography>
          <Typography className={classes.sub_Heading}>1 Day</Typography>
        </Grid>
        <Grid item lg={2} md={2} xs={2}>
          <Typography className={classes.main_Heading}>14.55%</Typography>
          <Typography className={classes.sub_Heading}>7 Days</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Data;
