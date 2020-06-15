import React from "react"

import "./HomeCard.css"

function getClass(cardClass){
    return "homecard-pentagon " + cardClass
}

function HomeCard(props){
    const cardClass = getClass(props.card.title)

    return(
        <div className="homecard">
            <div className={cardClass}></div>
            <h3 className="homecard-title">{props.card.title}</h3>
            <p className="homecard-description">{props.card.description}</p>
        </div>
    )
}


export default HomeCard