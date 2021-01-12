import logo from './logo.svg';
import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/MainComponent"

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div>
       <Main/>
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
