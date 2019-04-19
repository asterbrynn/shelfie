import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
