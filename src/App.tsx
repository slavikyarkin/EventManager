import React from 'react';
import logo from './logo.svg';
import './App.css';


type AddressType = {
  city : string
  street :string
}

type CompanyType = {
  name : string
  address : AddressType | null
}

type UserType = {
  name : string
  surname : string
  patron? : string
  address : AddressType | null
}

type EventType = {
  name : string
  address : AddressType | null
}

// let user : UserType = {
//   name : "Slavik",
//   surname : "Yarkin",
//   address : null
// }


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
