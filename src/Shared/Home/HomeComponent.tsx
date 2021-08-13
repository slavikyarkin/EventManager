import React from "react";
import { Link, makeStyles, Typography } from "@material-ui/core";
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => ({
    social: {
        margin: theme.spacing(10, 0, 20),
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <img src={logo} className="App-logo" alt="logo" />
        // <div className={classes.social}>
        //     <Typography
        //         align="center"
        //         color="primary"
        //         display="block"
        //         variant="h1"
        //     >
        //         Event Manager 
        //     </Typography>
        //     <Typography
        //         align="center"
        //         color="textSecondary"
        //         display="block"
        //         variant="h3"
        //     >
        //         helps to orgonize events of your company
        //     </Typography>
        // </div>
    );
}