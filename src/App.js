import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log('get problem lol', err))
  }
  render() {
    return (
      <div className="App" style={{justifyContent:"center", alignItems: "baseline"}}>
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
