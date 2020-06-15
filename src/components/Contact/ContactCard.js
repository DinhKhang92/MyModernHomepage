import React from "react"

import "./ContactCard.css"

function getIcon(icon){
    return icon + "-icon"
}

function getColor(color){
    return "contact-card " + color
}

function createMarkup(text){
    return {__html: text}
}

function ContactCard(props){
    const cardColor = getColor(props.card.color)
    const cardIcon = getIcon(props.card.type)

    return(
        <div className={cardColor}>
            <div className={cardIcon}></div>
            <p dangerouslySetInnerHTML={createMarkup(props.card.text)}></p>
        </div>
    )
}

export default ContactCard