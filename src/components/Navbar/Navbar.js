import React from "react"

import "./Navbar.css"

function Navbar(props){
    return(
        <header className="navbar">
            <div className="navbar__menu-icon" onClick={props.drawerClickHandler}>
                <div className="navbar__menu-icon-line"></div>
                <div className="navbar__menu-icon-line"></div>
                <div className="navbar__menu-icon-line"></div>
            </div>
            <div className="navbar__logo"></div>
        </header>
    )
}

export default Navbar