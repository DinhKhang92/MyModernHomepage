import React from "react"

import "./Footer.css"

function Footer(){
    return(
        <div className="footer__body">
            <p className="footer__copyright"> &copy; 2020 Khang Dinh </p>
            <ul className="footer__icons">
                <a href="https://www.xing.com/profile/Khang_Dinh2/cv" target="_blank"><li className="footer__xing-icon"></li></a>
                <a href="https://www.linkedin.com/in/khang-dinh-7790971a8/" target="_blank"><li className="footer__linkedin-icon"></li></a>
                <a href="https://github.com/DinhKhang92" target="_blank"><li className="footer__github-icon"></li></a>
            </ul>
        </div>
    )
}


export default Footer