import './Login.css';
import React from 'react';
import { useForm } from "react-hook-form";

const Login =(props) => {

  const {
    register,
    formState: { errors },
    reset,
    trigger,
    loginSubmit
  } = useForm();

  
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  let handleSubmit =  async function loginSubmit() {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
      // body: JSON.stringify({"email" : props.email, "password" : ""})
  };

    const response = await fetch('https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/login',requestOptions); {
    const data = await response.json();
    console.log(response);
    return data;
    // this.setState({ postId: data.email });
    }   
  }


  // let handleSubmit = async (e) => {
  //   // e.preventDefault();
  //   try {
  //     let res = await fetch("https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/login", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         mobileNumber: mobileNumber
  //       }),
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setName("");
  //       setEmail("");
  //       setMobileNumber(9874);
  //       setMessage("User created successfully");
  //     } else {
  //       setMessage("Some error occured");
  //     }
  //   } catch (err) {
  //   }
  // };

  return (
    <div  id="loginBox">
      <form onSubmit={handleSubmit(loginSubmit)}>
          <h1>Login</h1>
          
            <div id="email">
              
              <input type="email" placeholder="Enter the email" id="name" className={`form-control ${errors.email && "invalid"}`} 
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}/>

                {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
                      
            <div className="second-input" id="password">  
              <input type="password" placeholder="Enter the password" id="password" />
              
            </div>

            <div className="login-button" >
              <button id="submitButton">Login</button>
            </div>
            
              <p className="link">
                <div id="signupLink">
                  <span>New user? </span><br></br><button1> <a href="./Signup">SignUp</a></button1>
                </div>    
              </p> 
        
      </form>
    </div>
  );
}
export default Login;