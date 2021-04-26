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

import { GetCompanyButton } from './Company/CompanyComponents'
import { GetCompanyTextField } from './Company/CompanyComponents'
import React from 'react';
import Company from './Company/CompanyContainer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(companySaga);

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
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
      </Container>
    </Provider>
  );
}

export default App;
