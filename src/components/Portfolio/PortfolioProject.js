import React from "react"

import "./PortfolioProject.css"

function getImage(img){
    return "portfoliocard-img " + img
}

function PortfolioProject(props){

    const projectImg = getImage(props.project.img)

    return(
        <div className="portfoliocard">
            <div className={projectImg}></div>
            <p className="portfoliocard-skilltype">{props.project.type}</p>
            <p className="portfoliocard-title">{props.project.title}</p>
            <p className="portfoliocard-description">{props.project.description}</p>
            <p className="portfoliocard-readmore">Read more</p>
        </div>
    )
}

export default PortfolioProject