import React from 'react';
import logo from './logo.svg';
import './App.css';


import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { companySaga } from './Company/CompanySaga';
import { rootReducer } from './rootReducer';
// import { getCompanyButton } from './Company/CompanyComponents'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(companySaga);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <getCompanyButton > */}
//       </header>
//     </div>
//   );
// }

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Event Manager
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Event Managaer
        </Typography>


        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
