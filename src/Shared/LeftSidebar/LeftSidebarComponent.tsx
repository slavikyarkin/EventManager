import { Button, createStyles, CssBaseline, Drawer, fade, InputBase, makeStyles, SwipeableDrawer, Theme, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import './LeftSidebar.scss'

import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import { ApplicationState } from "../../applicationState";
import CompanyContainer from "../../Company/CompanyContainer";
import { RouterModel } from "../Router/RouterModel";
import * as routerActions from "../Router/routerActions";
import * as companyActions from "../../Company/CompanyActions";

import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { CompanyModel } from "../../Company/CompanyModel";
import { getEmail } from "../../useToken";

interface Props extends RouteComponentProps {
  routerModel?: RouterModel;
  companies?: CompanyModel[];
  redirect: (route: string) => void;
  loadCompanies: (param: string) => void;
}

const LeftSidebarContainer = (props: Props) => {

  React.useEffect(() => {
    let param = new URLSearchParams();
    param.append("email", getEmail() ?? "");
    props.loadCompanies(param.toString());
  }, [props.routerModel?.redirectTo]);

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
            {props.companies && props.companies.map(x => (
              <ListItem button key={x.id}>
                <ListItemText primary={x.name} onClick={() => props.redirect('/company/' + x.id)} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>

            <ListItem button key={'Add company'} >
              <ListItemText primary={'Add company'} onClick={() => props.redirect('/company/new')} />
            </ListItem>

          </List>
        </div>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    routerModel: state.routerState.router,
    companies: state.companyState.allCompanies
  }
};


const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    redirect: routerActions.redirect,
    loadCompanies: companyActions.loadAllByUser
  }, dispatch);
};


const LeftSidebar = withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftSidebarContainer));

export default LeftSidebar;
