import React,{useState} from 'react';

export default function Register() {

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/',
    'Access-Control-Allow-Methods' : 'OPTIONS, DELETE, POST, GET, PATCH, PUT'
  });
    // States for registration
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [message, setMessage] = useState("");
   
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
              username:username,     
              email: email,
              password: password,
              mobilenumber: mobilenumber
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {  
            setEmail("");
            setPassword("");
            setMessage("Login Succesfull");
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
          <h1>User {username} successfully registered!!</h1>
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
        <div>
          <h1>User Registration</h1>
        </div>
   
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
   
        <form >

          {/* Labels and inputs for form data */}
          <label className="label">User Name</label>
          <input onChange={handleName} className="input"
            value={username} type="text" />

          <label className="label">Mobile Number</label>
          <input onChange={handleMobileNumber} className="input"
            value={mobilenumber} type="text" />  
   
          <label className="label">Email</label>
          <input onChange={handleEmail} className="input"
            value={email} type="email" />
   
          <label className="label">Password</label>
          <input onChange={handlePassword} className="input"
            value={password} type="password" />
   
          <button onClick={handleSubmit} className="btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
   
  }

 