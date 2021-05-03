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

import { useHistory } from "react-router-dom";

export default function LeftSidebarComponent() {
  const history = useHistory();
  return (
    <div className={"root"}>
      <CssBaseline />
      <Drawer variant="permanent" >
        <Toolbar />
        <div >
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          <List>
            {['Company', 'Company 2', 'Conpany 3'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} onClick={() => history.push('/company/' + text)} />
              </ListItem>
            ))}
          </List>
          <Divider />
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
