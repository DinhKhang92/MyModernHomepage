import React from "react"

import "./Contact.css"
import ContactCard from "./ContactCard"
import contactCardData from "./data/contactCardData"

function Contact(){

    const contactCards = contactCardData.map(function(card){
        return <ContactCard key={card.id} card={card}/>
    })

    return(
        <div className="content-body">
            <div className="topbar rainbow"></div>
            <h3 className="page-label">Contact</h3>
            <div className="contact__cards">
                {contactCards}
            </div>
        </div>
    )
}

export default Contact