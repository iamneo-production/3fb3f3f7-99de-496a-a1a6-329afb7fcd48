import React from 'react';
import './App.css';
import Login from './pages/Login';
import InputField from './UIComponents/InputField';
import SubmitButton from './UIComponents/SubmitButton';
// import share from './images/CarSharing.svg'
class App extends React.Component{
  render(){
    return (
      <div className='loginpage'>
        <div className='container'>
          <Login/>
        </div>
        {/* <img className='imgshare' src={share} alt='share'/> */}
      </div>
    );
  }
}
export default App;