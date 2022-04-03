import React ,{useState}from 'react';
// import './Feedback.css';

function Feedback() {
  
  return(
  <div class="topnav">
      <div>
          <center>Car Pool is fun</center> 
      </div>
      <div class="topnav-left">
          <label> RIDE-SHARING </label>
      </div>
      <div class="topnav-right">
      <a href="./Home">Home</a>
      <a  class="active" href="./Profile">Profile</a>
      <a href="./Feedback">Feedback</a>
      <a href="./">Logout</a>
      </div>

<h2>FEED BACK FORM</h2>    
<div class="container">    
  <form>    
    <div class="row">    
      <div class="col-25">    
        <label for="fname">Name</label>    
      </div>    
      <div class="col-75">    
        <input type="text" id="fname" name="firstname" placeholder="Your Name.."/>    
      </div>    
    </div>    
    <div class="row">    
      <div class="col-25">    
        <label for="lname">Mobile Number</label>    
      </div>    
      <div class="col-75">    
        <input type="text" id="lname" name="Mobile Number" placeholder="Mobile Number"/>    
      </div>    
    </div>    
    <div class="row">    
        <div class="col-25">    
          <label for="email">Mail Id</label>    
        </div>    
        <div class="col-75">    
          <input type="email" id="email" name="mailid" placeholder="Your mail id.."/>    
        </div>    
    </div>    
    <div class="row">    
      <div class="col-25">    
        <label for="feed_back">Suggestions</label>    
      </div>    
      <div class="col-75">    
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>    
      </div>    
    </div>    
   <div class="row">    
      <div class="col-25">    
        <label for="feed_back">Complaints</label>    
      </div>    
      <div class="col-75">    
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>    
      </div>    
    </div>    
    <div class="row">    
      <input type="submit" value="Submit"/>    
    </div>    
  </form>    
  </div>    
  </div>
  );
}

export default Feedback