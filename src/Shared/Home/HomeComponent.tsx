import React from "react";
import { Container, CssBaseline, Link, makeStyles, Typography } from "@material-ui/core";
import logo from '../../logo.svg';
import home from '../../Home.png'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
            <div className={classes.paper}>
                <Typography
                    align="center"
                    color="primary"
                    display="block"
                    variant="h1"
                >
                    Event Manager
                </Typography>
                <Typography
                    align="center"
                    color="textSecondary"
                    display="block"
                    variant="h3"
                >
                    helps to orgonize events of your company
                </Typography>
            </div>
    );
}