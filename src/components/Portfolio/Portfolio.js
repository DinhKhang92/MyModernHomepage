import React from "react"

import "./Portfolio.css"

import PortfolioProject from "./PortfolioProject"
import portfolioData from "./data/portfolioData"

function Portfolio(){

    const portfolopProjects = portfolioData.map(function(project){
        return <PortfolioProject key={project.id} project={project} />
    })

    return(
        <div className="portfolio__body">
            <div className="topbar yellow-lg"></div>
            <h3 className="page-label yellow-font">
                Portfolio
            </h3>
            <div className="portfolio__cards">
                {portfolopProjects}
                {/* <div className="portfolio__card">
                    <div className="portfolio__card-img sitkrit"></div>
                    <p className="portfolio__card-skilltype">Machine Learning</p>
                    <p className="portfolio__card-title">Determination of driver attention using ML-approaches</p>
                    <p className="portfolio__card-description">
                        This project presents the determination of the driver’s attention by machine learning for the estimation of the collision danger in the
                        traffic on the basis of real data from endurance measurements.
                    </p>
                    <p className="portfolioe__card-readmore">Read more</p>
                </div>

                <div className="portfolio__card">
                    <div className="portfolio__card-img image-sr"></div>
                    <p className="portfolio__card-skilltype">Machine Learning</p>
                    <p className="portfolio__card-title">Image super-resolution using deep neural networks</p>
                    <p className="portfolio__card-description">
                        This project presents methods for image super-resolution using artificial neural networks. The approaches are compared and evaluated with
                        interpolation-based scaling algorithms such as nearest neighbor, bilinear interpolation and bicubic interpolation.
                    </p>
                    <p className="portfolioe__card-readmore">Read more</p>
                </div>

                <div className="portfolio__card">
                    <div className="portfolio__card-img tradedex"></div>
                    <p className="portfolio__card-skilltype">App Development</p>
                    <p className="portfolio__card-title">Tradedex 2.0</p>
                    <p className="portfolio__card-description">
                        Tradedex is a tool for the AR game 'Pokémon Go' and is designed exclusively for trading and collecting purposes. The trading process is to be
                        simplified due to the self-created lists, which can be shared among the contacts.
                    </p>
                    <p className="portfolioe__card-readmore">Read more</p>
                </div>

                <div className="portfolio__card">
                    <div className="portfolio__card-img homepage"></div>
                    <p className="portfolio__card-skilltype">Web Development</p>
                    <p className="portfolio__card-title">Homepage</p>
                    <p className="portfolio__card-description">
                        The homepage is an addition to my CV and is intended to represent my career and portfolio. The experience acquired from previous 
                        projects is highlighted.
                    </p>
                    <p className="portfolioe__card-readmore">Read more</p>
                </div> */}
            </div>
        </div>
    )
}

export default Portfolio