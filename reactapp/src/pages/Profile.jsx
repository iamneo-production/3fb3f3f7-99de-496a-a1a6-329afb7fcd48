import './Home.css';
import React ,{useState}from 'react';
import { useParams } from "react-router-dom";

const Profile =(props) => { 
  const [setMessage] = useState("");
  const [email] = useState("email");
  console.log(props)

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/',
    'Access-Control-Allow-Methods' : 'OPTIONS, DELETE, POST, GET, PATCH, PUT'
  });
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io//admin/getEmployee?id= {email}",  {
        headers: myHeaders,
        method: "GET"
      });
      let resJson = await res.json();
      if (res.status === 200) {  
        if(resJson === false){
          setMessage("User Already Exists");
        } else {
          window.location.href = "./"; 
          setMessage("Successfully Registered")
        }
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    // <div>
    //   <h1>Home</h1>
    // </div>
 <div>
<div class="topnav">
  <label> RIDE-SHARING </label>
  {/* <a href="./Login">Login</a> */}
  {/* <a href="./Register">Register</a>  */}
  <center>Car Pool is fun</center> 

  <div class="topnav-right">
  <a href="./Home">Home</a>
  <a  class="active" href="./Profile">Profile</a>
  <a href="./feedback">Feedback</a>
  <a href="./">Logout</a>
  </div>
</div>
<div class="homeScreen">

</div>
</div>
  );
}
export default Profile;