import './Home.css';
import React ,{useState}from 'react';
import { useParams,useLocation } from "react-router-dom";

function Profile (props) { 
  const [setMessage] = useState("");
  // const employee = {id: "", userName : ""};
  const [employee, setEmployee] = useState({});
  const { state } = useLocation();
  const email = state.email;
  console.log(state.email);  

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/',
    'Access-Control-Allow-Methods' : 'OPTIONS, DELETE, POST, GET, PATCH, PUT'
  });
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await 
      fetch(`https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/admin/employeeDetails?email=${email}`,  {
        headers: myHeaders,
        method: "GET"
      });
      let resJson = await res.json();
      if (res.status === 200) {  
        setEmployee(resJson);
        // console.log(this.state.userName);
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
      <div>
          <center>Car Pool is fun</center> 
      </div>
      <div class="topnav-left">
          <label> RIDE-SHARING </label>
        </div>
        {/* <a href="./Login">Login</a> */}
        {/* <a href="./Register">Register</a>  */}

      <div class="topnav-right">
      <a href="./Home">Home</a>
      <a  class="active" href="./Profile">Profile</a>
      <a href="./Feedback">Feedback</a>
      <a href="./">Logout</a>
      </div>
    </div>
    <div class="homeScreen">
      <form  onSubmit={handleSubmit}>
        <div className='submitButton'>
          <button type="submit" id = 'loginButton' className='btn'>Get My Details</button>
        </div>
    </form> 
    {/* <script> 
      var details = {employee.email};
      console.log(details);
      if(details !== null){ */}
        <div>
          <h1> Details of  {employee.userName}</h1>
          <br></br>
        <h6> UserName :  {employee.userName}</h6>
        <h6> UserId :  {employee.id}</h6>
        <h6> Mobile Number :  {employee.mobileNumber}</h6>
        <h6> Active :  {employee.active}</h6>
        <h6> Vehicle Number :  {employee.vehicleNumber}</h6>
        <h6> Vehicle Model :  {employee.vehicleModel}</h6>
        <h6> verified :  {employee.verified}</h6>
       </div>
      {/* } else {
        <div> user details</div>
      }
      </script> */}
<div>

</div>
</div>
</div>
  );
}
export default Profile;