import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, createStyles, Theme, fade } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { getToken } from "../../useToken";
import MenuIcon from '@material-ui/icons/Menu';

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
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);



export function TopNavigationComponent() {
  const classes = useStyles();
  const history = useHistory();
  const token = getToken();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {/* {token && (<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>)} */}
        <IconButton edge="start" className={classes.HomeButton} color="inherit" aria-label="menu" onClick={() => history.push('/')} >
          Event manager
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
        </Typography>
        {!token ?
          (<>
            <Button
              color="inherit"
              onClick={() => history.push('/signin')}
            >
              Sign In
            </Button>
            <Button
              color="inherit"
              onClick={() => history.push('/signup')}
            >
              Sign up
            </Button>
          </>
          ) : (<Button color="inherit" onClick={() => { localStorage.clear(); history.push('/signin') }}> Sign out </Button>)}
      </Toolbar>
    </AppBar>
  )
}