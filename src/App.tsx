import React, { useState } from 'react';
import "./app.scss"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanyContainer from './Company/CompanyContainer';

import { TopNavigationComponent } from './Shared/TopNavigation/TopNavigationComponent';
import LeftSidebarComponent from './Shared/LeftSidebar/LeftSidebarComponent';
import { MainBodyComponent } from './Shared/MainBody/MainBodyComponent';
import EventContainer from './Event/EventContainer';
import CompanyCreateContainer from './Company/CompanyCreateContainer';
import Login from './Shared/Login/LoginContainer';

function App() {

  return (
    <div className={"main-container"}>
      <Router>
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
          <Route path="/company/new" component={CompanyCreateContainer}>
            <LeftSidebarComponent />
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
      </Router>
    </div>
  );
}

export default App;