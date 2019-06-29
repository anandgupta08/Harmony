import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src="/assets/react.png" alt="logo" />
          <h1 className="App-Header">Product works!</h1>
          <div>
            <Link to="/product/details">Details</Link>
          </div>          
        </header>
      </div>
    );
  }
}

export default App;
