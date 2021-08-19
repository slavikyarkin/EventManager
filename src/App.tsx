import React, { useState } from 'react';
import "./app.scss"

import { BrowserRouter as Router, Switch, Route, useHistory, withRouter, RouterProps, RouteComponentProps } from "react-router-dom";
import CompanyContainer from './Company/CompanyContainer';

import { TopNavigationComponent } from './Shared/TopNavigation/TopNavigationComponent';
import LeftSidebarComponent from './Shared/LeftSidebar/LeftSidebarComponent';
import MainBodyContainer from './Shared/MainBody/MainBodyContainer';
import EventContainer from './Event/EventContainer';
import CompanyCreateContainer from './Company/CompanyCreateContainer';
import LoginContainer from './Shared/Login/LoginContainer';
import { connect } from 'react-redux';
import { ApplicationState } from './applicationState';
import { RouterModel } from './Shared/Router/RouterModel';
import { getToken } from './useToken';
import LogupContainer from './Shared/Signup/SignupContainer';
import { SnackbarContainer } from './Shared/Snackbar/SnackbarContainer';
import IdentifyContainer from './Shared/Login/Identify/IdentifyContainer';
import ResetPasswordContainer from './Shared/Login/ResetPassword/ResetPasswordContainer';
import { DialogContainer } from './Shared/Dialog/DialogContainer';
import CompanyEditContainer from './Company/CompanyEditContainer';
import CompanyInviteContainer from './Company/CompanyInviteContainer';
import EventCreateContainer from './Event/EventCreateContainer';
import Home from './Shared/Home/HomeComponent';
import Copyright from './Shared/Copyright/CopyrightComponent';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

interface Props extends RouteComponentProps {
  routerModel?: RouterModel;

}

const App = (props: Props) => {
  const token = getToken();
  const classes = useStyles();

  React.useEffect(() => {
    if (props.routerModel && props.routerModel.redirectTo && props.location.pathname !== props.routerModel.redirectTo) {
      props.history.push(props.routerModel.redirectTo);
    }
  });

  if (!token) {
    return (
      <div className={classes.root}>
        <TopNavigationComponent />
        <SnackbarContainer />

        {/* <DialogContainer /> */}
        <Switch>
          <Route path="/identify">
            <IdentifyContainer />
          </Route>
          <Route path="/signin">
            <LoginContainer />
          </Route>
          <Route path="/resetPassword">
            <ResetPasswordContainer />
          </Route>
          <Route path="/Signup">
            <LogupContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </footer>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <TopNavigationComponent />
      <LeftSidebarComponent />
      <SnackbarContainer />
      {/* <DialogContainer /> */}
      <Switch>
        <Route exact path="/company/new" component={CompanyCreateContainer} />
        <Route exact path="/company/:companyId/edit" component={CompanyEditContainer} />
        <Route exact path="/company/:companyId/invite" component={CompanyInviteContainer} />
        <Route exact path="/company/:companyId/users" component={CompanyEditContainer} />
        <Route path="/company/:companyId" component={CompanyContainer} />
        {/* <Route path="/event/new">
          <EventCreateContainer />
        </Route> */}
        <Route path="/event/:eventId" component={EventContainer}>
          <div>SHOW EVENT</div>
        </Route>
        <Route path="/">
        </Route>
      </Switch>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    routerModel: state.routerState.router,
  }
};

export default withRouter(connect(mapStateToProps)(App));