import React from "react"
import {Link} from "react-router-dom";

import "./Navbar.css"

function Navbar(props){
    return(
        <header className="navbar">
            <div className="navbar__menu-icon" onClick={props.drawerClickHandler}>
                <div className="navbar__menu-icon-line"></div>
                <div className="navbar__menu-icon-line"></div>
                <div className="navbar__menu-icon-line"></div>
            </div>
            <ul className="navbar__menu-items">
                <li><Link to="/" className="navbar__menu-item">Home</Link></li>
                <li><Link to="/Portfolio" className="navbar__menu-item">Portfolio</Link></li>
                <li><Link to="/Skills" className="navbar__menu-item">Skills</Link></li>
                <li><Link to="/Contact" className="navbar__menu-item">Contact</Link></li>
            </ul>
            <div className="navbar__logo"></div>
        </header>
    )
}

export default Navbar