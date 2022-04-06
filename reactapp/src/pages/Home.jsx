import './Home.css';
import React  from 'react';
import Profile from './Profile';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,useNavigate} from 'react-router-dom';

function Home (props) {
  let navigate = useNavigate();
  const { state } = useLocation();
  if(state==Object){
  state = state.email;
  }
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

  <div class="topnav-right">
    <a class="active" href="./Home">Home</a>
    <Link to="/profile" state={{ email: state }}>
    Profile   
    </Link>
    <a href = '/RoutePage'> Route </a>
    {/* <Link to="/RoutePage" state={{ email: state }}>
    Route   
    </Link>  */}
    <Link to="/Feedback" state={{ email: state }}>
    Feedback   
    </Link> 
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