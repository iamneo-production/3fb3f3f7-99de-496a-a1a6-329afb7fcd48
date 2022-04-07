import React,{useState} from 'react';
import InputField from '../UIComponents/InputField';
import SubmitButton from '../UIComponents/SubmitButton';
import '../App.css'
import { Link } from "react-router-dom";
import Header from '../UIComponents/Header';

class RoutePage extends React.Component{
  render(){
    return (
      <div>
      <div><Header/></div>
      <div>Route</div>
      </div>
    );
  }
}
export default RoutePage;