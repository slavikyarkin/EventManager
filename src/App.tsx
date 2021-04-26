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


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(companySaga);

function App() {
  return (
    <Container maxWidth="sm">
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
  );
}

export default App;
