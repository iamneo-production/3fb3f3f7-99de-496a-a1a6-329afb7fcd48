import React,{useState} from 'react';
import InputField from '../UIComponents/InputField';
import SubmitButton from '../UIComponents/SubmitButton';
import '../App.css'
import { Link } from "react-router-dom";
import Header from '../UIComponents/Header';
import Login from './Login';
import EditDetails from '../UIComponents/EditDetails';
import Grid from '../UIComponents/Grid';

class Home extends React.Component{
  render(){
    return (
      <div>
        <div><Header/></div>
        <div className='setCenter'>
          <div className='flexrow'>
            <div>
              <input className='searchBox' 
                id='searchBox' type='text'
                placeholder='Type here to Search'/>
              <buttton id='searchButton' 
                className='btn' >Search</buttton>
            </div>
          </div>
          <div className='flexrow'>
            <div className='data'>
             <table>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Role</th>
                <th>Options</th>
              </tr>
            </table>
            <Grid/>
            <Grid/>
            <Grid/>
            <Grid/>
            </div>
            <div className='editDetails'>
              <EditDetails/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;