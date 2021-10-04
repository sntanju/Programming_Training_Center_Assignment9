import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

            <div className="header-container m-3 p-5 ">
            <div className="header">
            <h1>Programming Training Center</h1>
            </div>
            
            <div className="nav-bar">
            <NavLink 
            style={{textDecoration:"none", color:"white", backgroundColor:"teal", margin:"15px", padding:"8px", borderRadius:"5px"}} to="/header">
            Home</NavLink>

            <NavLink 
            style={{textDecoration:"none", color:"white", backgroundColor:"teal", margin:"15px", padding:"8px", borderRadius:"5px"}} 
            to="/coueces">
            Cources</NavLink>

            <NavLink 
            style={{textDecoration:"none", color:"white", backgroundColor:"teal", margin:"15px", padding:"8px", borderRadius:"5px"}}  
            to="/aboutus">
            About Us</NavLink>
            <NavLink 
            style={{textDecoration:"none", color:"white", backgroundColor:"teal", margin:"15px", padding:"8px", borderRadius:"5px"}}  
            to="/contactus">
            Contact Us</NavLink>

            </div>
            </div>
    );
};

export default Header;