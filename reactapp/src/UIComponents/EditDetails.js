import React from 'react';
import InputField from '../UIComponents/InputField';
import SubmitButton from '../UIComponents/SubmitButton';
import '../App.css'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
class EditDetails extends React.Component{
  render(){
    return (
      <div className='loginForm'>
      <div className='title'>Edit Details</div>
      <InputField
        type='text'
        id='enterName'
        placeholder='Enter Name'
      />
      <InputField 
        type='text'
        id='enterEmail'
        placeholder='Enter Email'
      />
      <InputField
        type='number'
        id='enterMobile'
        placeholder='Enter Mobile'
      />
      <InputField
      type='password'
      id='enterPassword'
      placeholder='Enter Password'
      />
      <SubmitButton
          text='Update'
          id='updateButton'
      />
    </div>
    );
  }
}
export default EditDetails;