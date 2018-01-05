import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React and Redux</h1>
    </header>
    <div className="App-body">
      {props.children}
    </div>
  </div>
);

export default App;
