import React, {Component} from 'react';
import './App.css';
import Login from'./pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RoutePage from './pages/RoutePage';
import Feedback from './pages/Feedback';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
           <Route exact path="/Home" element={<Home/>}/>
           <Route exact path="/" element={<Login/>}/>
           <Route exact path="/Register" element={<Register/>}/>
           <Route exact path="/Feedback" element={<Feedback/>}/>
           <Route exact path="/Profile" element={<Profile/>}/> 
           <Route exact path="/RoutePage" element={<RoutePage/>}/> 
        </Routes>
      </Router>
    )
  }
}

export default App;