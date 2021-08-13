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


interface Props extends RouteComponentProps {
  routerModel?: RouterModel;

}

const App = (props: Props) => {
  const token = getToken();

  React.useEffect(() => {
    if (props.routerModel && props.routerModel.redirectTo && props.location.pathname !== props.routerModel.redirectTo) {
      props.history.push(props.routerModel.redirectTo);
    }
  });

  if (!token) {
    return (
      <>
        <TopNavigationComponent />
        <SnackbarContainer />
        <DialogContainer />
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
          <Route path="/company/new">
            <CompanyCreateContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    )
  }

  return (
    <div className={"main-container"}>
      <TopNavigationComponent />
      <LeftSidebarComponent />
      <SnackbarContainer />
      <DialogContainer />
      <Switch>
        <Route path="/editcompany/:companyId" component={CompanyEditContainer} />
        <Route path="/events">
          <div>EVENTS</div>
        </Route>
        {/* <Route path="company/:companyId/event/new" component={EventCreateContainer} /> */}
        <Route path="/event/new">
          <EventCreateContainer />
        </Route>
        <Route path="/event/:eventId" component={EventContainer}>
          <div>SHOW EVENT</div>
        </Route>
        <Route path="/company/new">
          <CompanyCreateContainer />
        </Route>
        <Route path="/company/:companyId" component={CompanyContainer} />
        {/* <MainBodyContainer />
        </Route> */}
        <Route path="/invitecompany/:companyId" component={CompanyInviteContainer} />
        <Route path="/">
          <div>HOME</div>
        </Route>
      </Switch>

    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    routerModel: state.routerState.router,
  }
};

export default withRouter(connect(mapStateToProps)(App));