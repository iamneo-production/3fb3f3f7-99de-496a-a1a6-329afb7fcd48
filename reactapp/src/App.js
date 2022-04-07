import React from 'react';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import InputField from './UIComponents/InputField';
import SubmitButton from './UIComponents/SubmitButton';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home';
import RoutePage from './pages/RoutePage';
class App extends React.Component{
  render(){
    return (
      <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/homepage" component={Home} />
          <Route path="/routepage" component={RoutePage} />
          <Redirect to="/homepage" />
        </Switch>
      </Router>
    </>
    );
  }
}
export default App;