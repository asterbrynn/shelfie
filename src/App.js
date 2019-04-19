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
      inventory: [{name: 'Asterism', price: 50, imgurl: 'https://ln.nikkis.info/preview/accessory125.jpg', id: 0},
      {name: 'Starsea Necklace', price: 75, imgurl: 'https://ln.nikkis.info/preview/accessory126.jpg', id: 1},
      {name:'Starsea Gloves', price: 80, imgurl: 'https://ln.nikkis.info/preview/accessory127.jpg', id: 2}]
    }
    this.getInventory = this.getInventory.bind(this)
  }
  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log('get problem lol', err))
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
      </div>
    );
  }
}

export default App;
