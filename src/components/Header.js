import React from 'react';
import '../styles/Header.css';
import { useSelector } from 'react-redux';

function Header() {
    const user= useSelector((state)=> state.users.loggedInUser)
  return (
    <div className="header">
        <div className= "header-left"> Staff Ms </div>
        <div className="header-center"> Welcome {user?.firstName} </div>
        <div className="header-right"></div>
    </div>
  );
}
export default Header;