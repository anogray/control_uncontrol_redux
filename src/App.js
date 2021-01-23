import logo from './logo.svg';
import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

import Main from "./components/MainComponent"
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  render(){
    return (
<<<<<<< HEAD
      <Provider store={store}>
      <BrowserRouter>
      <div>
       <Main/>
      </div>
      </BrowserRouter>
      </Provider>
=======
      <div>
       <Main/>
      </div>
>>>>>>> 0986343 (removed eslintcache)
    );
  }
  
}

export default App;
