import React from "react"

import "./Skills.css"
import skillData from "./data/skillData"
import SkillCard from "./SkillCard"

function Skills(){

    const skillCards = skillData.map(function(card){
        return <SkillCard key={card.id} card={card}/>
    })

    return(
        <div className="content-body">
            <div className="topbar red-lg"></div>
            <h3 className="page-label red-font"> Skills </h3>
            <div className="skills__cards">
                {skillCards}
            </div>
        </div>
    )
}

export default Skills