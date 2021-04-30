import { Button, createStyles, CssBaseline, Drawer, fade, InputBase, makeStyles, SwipeableDrawer, Theme, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import './LeftSidebar.scss'
import { browserHistory } from 'react-router';
//const drawerWidth = 240;
import { useHistory } from "react-router-dom";

export default function LeftSidebarComponent() {

  const history = useHistory();


  return (
    <div className={"root"}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar> */}
      <Drawer

        variant="permanent"

      >
        <Toolbar />
        <div >
          <div >
            {/* <div className={classes.searchIcon}>
                <SearchIcon /> */}
          </div>
          <InputBase
            placeholder="Search…"

            inputProps={{ 'aria-label': 'search' }}
          />
          {/* </div> */}
          <ListItem button key={'Home'} >
            <ListItemText primary={'Home'} onClick={() => history.push('/')} />
          </ListItem>

          <List>
            {['Company', 'Company 2', 'Conpany 3'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} onClick={() => history.push('/company/'+text)} />
              </ListItem>
            ))}
          </List>
          <Divider />
          {/* <Button>
              Add company
            </Button> */}
          <List>

            <ListItem button key={'Add company'} >
              <ListItemText primary={'Add company'} onClick={() => history.push('/company/new')} />
            </ListItem>

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

