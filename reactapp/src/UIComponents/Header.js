import React from 'react';
import {NavLink, Link} from 'react-router-dom';
class Header extends React.Component{
  render(){
    return (
        <nav>
          <div className='header'>
              <div className='left'>
                  <div className='appName'>RIDE-SHARING</div> 
              </div>
              <div className='navLinkPlace'>
                  <Link to='/homepage' className='navLink'>Home</Link>
                  <Link to='/routepage' className='navLink'>Route</Link>
                  <Link to='/login' className='navLink' >Logout</Link>
              </div>
          </div>
      </nav>
    );
  }
}
export default Header;