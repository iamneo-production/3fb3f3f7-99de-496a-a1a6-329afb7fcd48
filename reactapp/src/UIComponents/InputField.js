import React from 'react';

class InputField extends React.Component{
  render(){
    return (
      <div className='inputField'>
        <input 
          className='input'
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
export default InputField;