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
  {/* <a href="#myorder">Myorder</a> */}
  <div class="topnav-right">
    <a href="./logout">Logout</a>
  </div>
</div>
<div class="homeScreen">
<h1> WELCOME HOME</h1>
</div>
</div>
  );
}
export default Home;