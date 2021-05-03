import React from 'react';
import "./app.scss"

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";


import { companySaga } from './Company/CompanySaga';
import CompanyContainer from './Company/CompanyContainer';

import { rootReducer } from './rootReducer';

import { TopNavigationComponent } from './Shared/TopNavigation/TopNavigationComponent';
import LeftSidebarComponent from './Shared/LeftSidebar/LeftSidebarComponent';
import { MainBodyComponent } from './Shared/MainBody/MainBodyComponent';
import EventContainer from './Event/EventContainer';




const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(companySaga);

function App() {
  return (
    <Provider store={store}>
      <div className={"main-container"}>
        <Router>
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
              <div>Create new company</div>
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
    </Provider>
  );
}

export default App;