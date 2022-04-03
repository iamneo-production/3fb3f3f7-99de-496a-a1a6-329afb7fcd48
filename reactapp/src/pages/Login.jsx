import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

import './Home.css';

function Login(){
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/',
    'Access-Control-Allow-Methods' : 'OPTIONS, DELETE, POST, GET, PATCH, PUT'
  });

  function handleClick() {
    navigate("/Home",{ state: email});
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/login",  {
        headers: myHeaders,
        method: "POST",
        body: JSON.stringify({      
          email: email,
          password: password
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        if(resJson === false) {
          setMessage("User Not Found/ Incorrect Password");
        } else {
          handleClick();
          setMessage("Login Succesful");
        }       
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
      <div>
         <div class="topnav">
          
            <a class="active" href="./Login">Login</a>
            {/* <a href="./Register">Register</a> */}
            {/* <a href="#myorder">Myorder</a> */}
            
        </div>

      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
        <div className='title'>Ride Log In</div>
        <div  className = 'inputField'>
         <input className='input'
          type='text'
          id='email'
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)} 
        />
        </div>
        <div  className = 'inputField'>
         <input className='input'          type='password'
          id='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        </div>
        <div className='signuptext'>
          <text>New User? </text>
          <button1 id = 'signuplink'> <a href="./Register">Register</a></button1>
        </div> 
        <div className='submitButton'>
        <button type="submit" id = 'loginButton' className='btn'>Log In</button>
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
      </div>
    );
}

export default Login;
