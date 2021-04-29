import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, createStyles, Theme, fade } from "@material-ui/core";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    HomeButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);



export function TopNavigationComponent() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.HomeButton} color="inherit" aria-label="menu" >
          Event manager
        </IconButton>
        {/* <Typography variant="h6" noWrap>
              
        </Typography> */}
           <Button color="inherit"> Login </Button>
       </Toolbar>
    </AppBar> 
  )
}