import React,{useState} from 'react';
import './Home.css';
// import InputField from '../UIComponents/InputField';

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/',
    'Access-Control-Allow-Methods' : 'OPTIONS, DELETE, POST, GET, PATCH, PUT'
  });

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
        if(resJson == false) {
          setMessage("User Not Found");
        } else {
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
            <a href="./">Home</a>
            <a class="active" href="./Login">Login</a>
            <a href="./Register">Register</a>
            {/* <a href="#myorder">Myorder</a> */}
            <div class="topnav-right">
              <a href="./logout">Logout</a>
            </div>
        </div>

      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
        <div className='title'>Log In</div>
        <input
          type='text'
          id='email'
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input
          type='password'
          id='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <div className='signuptext'>
          <text>New User? </text>
          <button1> <a href="./Register">Register</a></button1>
        </div>
        <button type="submit">Login</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
      </div>
    );
}

export default Login;