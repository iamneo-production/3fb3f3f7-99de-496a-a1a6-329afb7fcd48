import React from 'react';
import { Link } from 'react-router-dom';
class SubmitButton extends React.Component{
  
  render(){
    return (
      <div className='submitButton'>
        <button 
          className='btn'
        >
        {this.props.text}
        </button>
      </div>
    );
  }
}
export default SubmitButton;