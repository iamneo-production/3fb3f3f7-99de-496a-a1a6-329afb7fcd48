import React, {Component} from 'react';
import './App.css';

 import Login from'./pages/Login';
 import Register from './pages/Register';
 import Home from './pages/Home';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/> 
        </Routes>
      </Router>
    )
  }
}

export default App;