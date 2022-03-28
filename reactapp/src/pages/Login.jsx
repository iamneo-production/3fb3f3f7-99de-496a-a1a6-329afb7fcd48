import React,{useState} from 'react';
// import InputField from '../UIComponents/InputField';
import SubmitButton from '../UIComponents/SubmitButton';

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
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
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
          <button1> <a href="./SignUp">SignUp</a></button1>
        </div>
        <button type="submit">Login</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    );
}

export default Login;