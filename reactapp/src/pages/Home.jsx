import './Home.css';
import React  from 'react';
import Profile from './Profile';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,useNavigate} from 'react-router-dom';

function Home (props) {
  let navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);  
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

    <Link to="/profile" state={{ email: state }}>
    Profile   
    </Link>
    {/* </a> */}
    <a href="./Feedback">Feedback</a> 
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