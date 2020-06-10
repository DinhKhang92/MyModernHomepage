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
            {/* <div className="sidedrawer__icons">
                <a href="https://www.xing.com/profile/Khang_Dinh2/cv" target="_blank"><li className="sidedrawer__xing-icon"></li></a>
                <a href="https://www.linkedin.com/in/khang-dinh-7790971a8/" target="_blank"><li className="sidedrawer__linkedin-icon"></li></a>
                <a href="https://github.com/DinhKhang92" target="_blank"><li className="sidedrawer__github-icon"></li></a>
            </div> */}
        </nav>
    )
}

export default SideDrawer