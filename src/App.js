import logo from './logo.svg';
import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';
import Menu from './components/menuComponents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }  
  render(){
    return (
      <div>
       <Navbar dark color="primary">
       <div className="container">
       <NavbarBrand href = "/">Restaraunt Con Here</NavbarBrand>
       </div>
       </Navbar>
       <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
  
}

export default App;
