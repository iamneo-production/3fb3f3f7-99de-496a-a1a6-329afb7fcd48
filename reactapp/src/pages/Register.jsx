import React,{useState} from 'react';

export default function Register() {

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/',
    'Access-Control-Allow-Methods' : 'OPTIONS, DELETE, POST, GET, PATCH, PUT'
  });
    // States for registration
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [active, setActive] = useState('');
    const [message, setMessage] = useState("");
    const [confirmpassword, setConfirmPassword] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
   
    // Handling the name change
    const handleName = (e) => {
      setUserName(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the email change
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
   
     // Handling the mobilenumber change
     const handleMobileNumber = (e) => {
        setMobileNumber(e.target.value);
        setSubmitted(false);
      };
        // Handling the Confirmpassword change
    const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
      if(password === confirmpassword){
        setSubmitted(false);
      }  else {
            setSubmitted(false);
            setError(true);
          }
    };
    // Handling the form submission
    // const handleSubmit = (e) => {
    //   e.preventDefault();


    //   if (name === '' || email === '' || password === '') {
    //     setError(true);
    //   } else {
    //     setSubmitted(true);
    //     setError(false);
    //   }
    // };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/signup",  {
            headers: myHeaders,
            method: "POST",
            body: JSON.stringify({   
              userName:userName,     
              email: email,
              password: password,
              mobileNumber: mobileNumber,
              active : true
           }),
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
   
    // Showing success message
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          <h1>User {userName} successfully registered!!</h1>
        </div>
      );
    };
   
    // Showing error message if error is true
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <h1>Please enter all the fields</h1>
        </div>
      );
    };
   
    return (
      <div className="form">
         <div class="topnav">
            
            <a href="./">Login</a>
            <a class = "active" href="./Register">Register</a>
            {/* <a href="#myorder">Myorder</a> */}
        </div>
   
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <form >

        <div className='loginForm'>
        <div className='title'>Register </div>
          {/* Labels and inputs for form data */}
          <div className = 'inputField'>
          <label className="label">User Name</label>
          <input onChange={handleName} className="input" id = 'username'
            value={userName} type="text" />
          </div>
          <div className = 'inputField'>
          <label className="label">Mobile Number</label>
          <input onChange={handleMobileNumber} className="input" id = 'mobileNumber'
            value={mobileNumber} type="text" />  
          </div>
          <div className = 'inputField'>
          <label className="label">Email</label>
          <input onChange={handleEmail} className="input" id = 'email'
            value={email} type="email" />
          </div>
          <div className = 'inputField'>
          <label className="label">Password</label>
          <input onChange={handlePassword} className="input" id = 'password'
            value={password} type="password" />
          </div>
          <div className = 'inputField'>
          <label className="label">Confirm Password</label>
          <input onChange={handleConfirmPassword} className="input" id = 'confirmPassword'
            value={confirmpassword} type="password" />
          </div>
            <div className='signuptext'>
              <text>Already a User? </text>
              <button1 id = 'signinLink'> <a href="./">Log In</a></button1>
            </div>   
          <div>
            <div>
          <button id = 'loginButton' onClick={handleSubmit} className="btn" type="submit">
            Sign Up
          </button>
          </div>
          <div className="message">{message ? <p>{message}</p> : null}</div>
          </div>
          </div>
        </form>
      </div>
    );
   
  }

 