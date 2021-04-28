import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function TopNavigationComponent() {
  const classes = useStyles();

  return (
    <AppBar position="static" >
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
        </IconButton>
        < Typography variant="h6" className={classes.title} >
          News
                </Typography>
        <Button color="inherit" > Login </Button>
      </Toolbar>
    </AppBar>
  )
}