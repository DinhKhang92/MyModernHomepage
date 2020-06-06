import React from "react"

import "./Contact.css"

function Contact(){
    return(
        <div className="contact__body">
            <div className="contact__bar"></div>
            <h3 className="contact__current-page">
                Contact
            </h3>
            <div className="contact__card blue">
                <div className="contact__mail-icon"></div>
                <p>Dinh.Khang92@hotmail.de</p>
            </div>
            <div className="contact__card yellow">
                <div className="contact__phone-icon"></div>
                <p>+49 176 4385 9794</p>
            </div>
            <div className="contact__card red">
                <div className="contact__gps-icon"></div>
                <p>Katharinenstr. 7 <br /> 10711, Berlin</p>
            </div>
        </div>
    )
}

export default Contact