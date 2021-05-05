import React from 'react';
import "./app.scss"

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Switch, Route } from "react-router-dom";
import { connect, Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";


import { companySaga } from './Company/CompanySaga';
import CompanyContainer from './Company/CompanyContainer';

import { rootReducer } from './rootReducer';

import { TopNavigationComponent } from './Shared/TopNavigation/TopNavigationComponent';
import LeftSidebarComponent from './Shared/LeftSidebar/LeftSidebarComponent';
import { MainBodyComponent } from './Shared/MainBody/MainBodyComponent';
import EventContainer from './Event/EventContainer';
import CompanyCreate from './Company/CompanyCreateContainer';
import { ApplicationState } from './applicationState';
import { RouterModel } from './Shared/Router/RouterModel';
import { browserHistory, Router  } from 'react-router';


interface StateProps {
  routerModel?: RouterModel;
}


const App: React.FunctionComponent<StateProps> = (props) => {
  // const history = useHistory();
  
  // React.useEffect(() => {
  //   if (props.routerModel && props.routerModel.redirectTo) {
  //     if (props.routerModel.redirectTo.startsWith("/")) {
  //       history.push(props.routerModel.redirectTo);
  //     }
  //     else {
  //       window.location.href = props.routerModel.redirectTo;
  //     }
  //   }
  // });

  return (

      <div className={"main-container"}>
       <Router history={browserHistory} >
          <TopNavigationComponent />
          <LeftSidebarComponent />
          <Switch>
            <Route path="/events">
              <div>EVENTS</div>
            </Route>
            <Route path="/event/new">
              <div>Create new event</div>
            </Route>
            <Route path="/event/:eventId" component={EventContainer}>
              <div>SHOW EVENT</div>
            </Route>
            <Route path="/company/new">
              <CompanyCreate />
            </Route>
            <Route path="/company/:companyId" component={CompanyContainer} >
              <MainBodyComponent />
            </Route>
            <Route path="/">
              <div>HOME</div>
              <MainBodyComponent />
            </Route>
          </Switch>
          </Router>
      </div>
    
  );
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    routerModel: state.router.router,
  }
};

export default connect(mapStateToProps)(App);