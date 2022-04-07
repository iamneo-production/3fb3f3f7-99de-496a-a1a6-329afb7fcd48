import React,{useState} from 'react';
import InputField from '../UIComponents/InputField';
import SubmitButton from '../UIComponents/SubmitButton';
import share from '../images/CarSharing.svg';
import '../App.css'
import { Link } from "react-router-dom";

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showPassword: false
    }
  }
  

  render(){
    return (
        <div className='loginpage'>
        <img className='imgshare2' src={share} alt='share'/>
        <div className='container'>
      <div className='loginForm'>
        <div className='title'>Sign Up</div>
        <InputField 
          type='text'
          id='email'
          placeholder='Enter Email'
        />
        <InputField
          type='text'
          id='username'
          placeholder='Enter UserName'
        />
        <InputField
          type='number'
          id='phonenumber'
          placeholder='Enter Phone Number'
        />
        <InputField
        type='password'
        id='password1'
        placeholder='Enter Password'
        />
        <InputField
        type='password'
        id='password2'
        placeholder='Confrim Password'
        />
        <div className='signuptext'>
          <div className='link'>
            <div>New User?</div>
          <Link to="/login" id='signinLink' className='signuplink'>Log In</Link>
          </div>
        </div>
        <SubmitButton
          text='Sign Up'
          id='submitButton'
        />
      </div>
      </div>
      </div>
    );
  }
}
export default Signup;