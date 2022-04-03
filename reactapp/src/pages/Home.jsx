import './Home.css';
import React  from 'react';
import Profile from './Profile';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

function Home () {
  const search = window.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  let email = params.get('email'); 
  console.log(email)
  return (
 <div>
<div class="topnav">
  <div>
    <center>Car Pool is fun</center> 
  </div>
  <div class="topnav-left">
    <label> RIDE-SHARING </label>
  </div>
  {/* <a href="./Login">Login</a> */}
  {/* <a href="./Register">Register</a>  */}
  <div class="topnav-right">
    <a class="active" href="./Home">Home</a>
    {/* <a href ="./Profile"> Profile */}
    <Link   to={
       {     
         pathname: '/profile',
         state: email
        }
       }> 
    Profile   
    </Link>
    {/* </a> */}
    <a href="./feedback">Feedback</a> 
    <a href="./">Logout</a>
  </div>
</div>
<div class="homeScreen">

<h1> WELCOME TO YOUR RIDE APP </h1>

<h3>Save nature by sharing your car</h3>
<h4>Share daily, Save more</h4>
{/* <img src ="/images/car.PNG" alt=""/> */}
</div>
</div>
  );
}
export default Home;