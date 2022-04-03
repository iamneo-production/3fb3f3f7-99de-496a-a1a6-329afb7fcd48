import React, {Component} from 'react';
import './App.css';
import Login from'./pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
           <Route exact path="/Home" element={<Home/>}/>
           <Route exact path="/Login" element={<Login/>}/>
           <Route exact path="/" element={<Register/>}/
           <Route exact path="/Profile" element={<Profile/>}/> 
        </Routes>
      </Router>
    )
  }
}

export default App;