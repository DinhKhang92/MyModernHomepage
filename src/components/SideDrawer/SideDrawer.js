import React from "react"

import MenuItems from "../MenuItems/MenuItems"

import "./SideDrawer.css"

function SideDrawer(props){
    let drawerClasses = 'side-drawer'
    if(props.show)
        drawerClasses = 'side-drawer open'

    let menuItems = ['Home', 'Portfolio', 'Skills', 'Contact']

    const myMenuItems = menuItems.map(function(item){
        return <MenuItems key={item} menuItem={item} click={props.click}/>
    })


    return(
        <nav className={drawerClasses}>
            <div className="sidedrawer__container-close" onClick={props.click}>
                <span className="iconify" data-icon="mdi-close" data-inline="false"></span>
            </div>
            <ul className="sidedrawer__menu-items">
                {myMenuItems}
            </ul>
        </nav>
    )
}

export default SideDrawer