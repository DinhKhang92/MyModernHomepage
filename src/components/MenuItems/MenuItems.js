import React from "react"

import {Link} from "react-router-dom";

import "./MenuItems.css"

function getLinkPath(page){
    if(page === "Home")
        return "/"
    else
        return "/" + page
}

function MenuItems(props){
    const path = getLinkPath(props.menuItem)
    return(
        <div>
            <li onClick={props.click}><Link to={path} className="menu-items__item">{props.menuItem}</Link></li>
        </div>
    )
}

export default MenuItems