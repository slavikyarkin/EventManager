import { Button, createStyles, CssBaseline, Drawer, fade, InputBase, makeStyles, SwipeableDrawer, Theme, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(2, 0),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(2, 1, 1, 2),
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

export default function LeftSidebarComponent() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        {/* <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <div className={classes.search}>
              {/* <div className={classes.searchIcon}>
                <SearchIcon /> */}
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            {/* </div> */}
            <List>
              {['Company', 'Company 2', 'Conpany 3'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            {/* <Button>
              Add company
            </Button> */}
            <List>
              {['Add company'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }




// export class LeftSidebarComponent extends Component {
//     constructor(props: any) {
//         super(props);

//         this.state = {
//             openSidebar: false
//         };
//     }

    


//     list = (anchor: string) => (
//         <List>
//             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                 <ListItem button key={text}>
//                     <ListItemText primary={text} />
//                 </ListItem>
//             ))}
//         </List>

//     );

//     render() {

//         const onOpen = () => { };
//         const onClose = () => { };
//         return (

//             <SwipeableDrawer
//                 anchor={'left'}
//                 open={true}
//                 onOpen={onOpen}
//                 onClose={onClose}

//             >
//                 {this.list('left')}
//             </SwipeableDrawer>

//         );
//     }

// }

