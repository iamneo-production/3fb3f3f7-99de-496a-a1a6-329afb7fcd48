
import './Home.css';
import './Route.css';
import React ,{useState}from 'react';
import { Link, useLocation} from "react-router-dom";


function RoutePage (props) { 
    const { state } = useLocation();
    // const email = state.email;
    // console.log(email);
  
return (
    <div className="form">
<div class="topnav">
      <div>
          <center>Car Pool is fun</center> 
      </div>
      <div class="topnav-left">
          <label> RIDE-SHARING </label>
      </div>
      <div class="topnav-right">
      <Link to="/Home" state={{ email: state }}>
         Home   
      </Link>    
       {/* <a href = './Profile'> Profile </a> */}
     <Link to="/profile" state={{ email: state }}>
         Profile   
      </Link>     
      <Link to="/RoutePage" state={{ email: state }}>
    Route   
    </Link> 
    <Link to="/Feedback" state={{ email: state }}>
    Feedback   
    </Link> 
       <a href="./">Logout</a>
      </div>
      </div>
<div>
<input type="text" placeholder="placeA...." name="search"/>&nbsp;
<input type="text" placeholder="placeB...." name="search"/>&nbsp;
<button type="submit">Submit</button>
<table>
    <tr>
        <td>
            Place A 
            &ensp; to
            Place B
        </td>
        <td>
            Place A 
            &ensp; to
            Place B
        </td>
        <td rowspan="2"></td>
    </tr>
    <tr>
        <td>
        Place A
        &ensp; to
        Place B
        </td>
        <td>
        Place A 
        &ensp; to
        Place B
        </td>
    </tr>
</table>
</div>

</div>
);
}

export default RoutePage;