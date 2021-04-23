import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { companySaga } from './company/companySaga';
import { rootReducer } from './rootReducer';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(companySaga);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
