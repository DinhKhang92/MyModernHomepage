import React from "react"

import "./SkillCard.css"

function getIcon(icon){
    return "skillcard-icon " + icon
}

function SkillCard(props){
    const skillcardIcon = getIcon(props.card.icon)
    const skills = props.card.skills.map(function(skill){
        return <li key={skill}>{skill}</li>
    })

    return(
        <div className="skillcard">
            <div className={skillcardIcon}></div>
            <h3 className="skillcard-title">{props.card.title}</h3>
            <ul className="skillcard-skills">
                {skills}
            </ul>
        </div>
    )
}

export default SkillCard