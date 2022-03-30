import './Home.css';
import React from 'react';
// import { useForm } from "react-hook-form";

const Home =() => {

  return (
    // <div>
    //   <h1>Home</h1>
    // </div>
 <div>
<div class="topnav">
  <a class="active" href="./Home">Home</a>
  <a href="./Login">Login</a>
  <a href="./Register">Register</a> 
  <center>Car Pool is fun</center> 

  <div class="topnav-right">
  <a href="./feedback">Feedback</a>
    <a href="./logout">Logout</a>
  </div>
</div>
<div class="homeScreen">
<h1> WELCOME TO YOUR RIDE APP</h1>
<h3>Save nature by sharing your car</h3>
<h4>Share daily, Save more</h4>
<img src ="/images/car.PNG" alt=""/>
</div>
</div>
  );
}
export default Home;