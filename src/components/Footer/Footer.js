import React from "react"

import "./Footer.css"

function Footer(){
    return(
        <div className="footer__body">
            <p className="footer__copyright"> &copy; 2020 Khang Dinh </p>
            <ul className="footer__icons">
                <li className="footer__xing-icon"></li>
                <li className="footer__linkedin-icon"></li>
                <li className="footer__github-icon"></li>
            </ul>
        </div>
    )
}


export default Footer