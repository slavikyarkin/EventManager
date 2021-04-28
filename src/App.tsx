// import React from 'react';
// import logo from './logo.svg';
import './App.css';


import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { companySaga } from './Company/CompanySaga';
import { rootReducer } from './rootReducer';

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { GetCompanyButton } from './Company/CompanyComponents'
import { GetCompanyTextField } from './Company/CompanyComponents'
import React from 'react';
import Company from './Company/CompanyContainer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import CompanyContainer from './Company/CompanyContainer';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(companySaga);

const history = syncHistoryWithStore(browserHistory, store)

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={CompanyContainer}>




        </Route> 
        
        {/* <Container maxWidth="sm">
          <Company companyId={1} />
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Event Managaer
          </Typography>
            <form>
              <GetCompanyTextField />
              <GetCompanyButton />
            </form>



          </Box>
        </Container> */}
      </Router>
    </Provider>
  );
}

export default App;