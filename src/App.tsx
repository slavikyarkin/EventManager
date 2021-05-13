import React, { useState } from 'react';
import "./app.scss"

import { BrowserRouter as Router, Switch, Route, useHistory, withRouter, RouterProps, RouteComponentProps } from "react-router-dom";
import CompanyContainer from './Company/CompanyContainer';

import { TopNavigationComponent } from './Shared/TopNavigation/TopNavigationComponent';
import LeftSidebarComponent from './Shared/LeftSidebar/LeftSidebarComponent';
import { MainBodyComponent } from './Shared/MainBody/MainBodyComponent';
import EventContainer from './Event/EventContainer';
import CompanyCreateContainer from './Company/CompanyCreateContainer';
import Login from './Shared/Login/LoginContainer';
import { connect } from 'react-redux';
import { ApplicationState } from './applicationState';
import { RouterModel } from './Shared/Router/RouterModel';


interface Props extends RouteComponentProps  {
  routerModel?: RouterModel;
}

const App = (props: Props) => {
  
  
  React.useEffect(() => {
    if (props.routerModel && props.routerModel.redirectTo) {
      props.history.push(props.routerModel.redirectTo);
    }
  });


  return (
    <div className={"main-container"}>
      
        <TopNavigationComponent />
        <Switch>
          <Route path="/events">
            <div>EVENTS</div>
            <LeftSidebarComponent />
          </Route>
          <Route path="/event/new">
            <div>Create new event</div>
          </Route>
          <Route path="/event/:eventId" component={EventContainer}>
            <div>SHOW EVENT</div>
          </Route>
          <Route path="/company/new">
            <LeftSidebarComponent />
            <CompanyCreateContainer />
          </Route>
          <Route path="/company/:companyId" component={CompanyContainer} >
            <MainBodyComponent />
            <LeftSidebarComponent />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>HOME</div>
          </Route>
        </Switch>
   
    </div>
  );
}



const mapStateToProps = (state: ApplicationState) => {
  return {
    routerModel: state.router.router,
  }
};


export default withRouter(connect(mapStateToProps)(App));