import React from 'react';
import InputField from '../UIComponents/InputField';
import SubmitButton from '../UIComponents/SubmitButton';
import share from '../images/CarSharing.svg';
import '../App.css'
import { Link } from "react-router-dom";

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showPassword: false,
    }
  }

  render(){
    return (
      <div className='loginpage'>
        <div className='container'>
          <div className='loginForm'>
            <div className='title'>Log In</div>
            <InputField
              type='text'
              id='email'
              placeholder='Enter Email'
            />
            <InputField
              type='password'
              id='password'
              placeholder='Enter Password'
            />
            <div className='signuptext'>
              <div className='link'>
                <div>New User?</div>
                  <Link to='/signup' className='signuplink' id='signuplink'>Sign Up</Link>
              </div>
            </div>
            <SubmitButton
              text='Log In'
              id='loginButton'
            />
          </div>
        </div>
        <img className='imgshare' src={share} alt='share'/>
      </div>
    );
  }
}
export default Login;