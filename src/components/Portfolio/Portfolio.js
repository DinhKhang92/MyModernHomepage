import React from "react"

import "./Portfolio.css"

function Portfolio(){
    return(
        <div className="portfolio__body">
            <div className="portfolio__bar"></div>
            <h3 className="portfolio__current-page">
                Portfolio
            </h3>
            <div className="portfolio__card">
                <div className="portfolio__card-img sitkrit"></div>
                <p className="portfolio__card-skilltype">Machine Learning</p>
                <p className="portfolio__card-title">Determination of driver attention using ML-approaches</p>
                <p className="portfolio__card-description">
                    This document presents the determination of the driver’s attention by machine learning for the estimation of the collision danger in the
                    traffic on the basis of real data from endurance measurements.
                </p>
                <p className="portfolioe__card-readmore">Read more</p>
            </div>

            <div className="portfolio__card">
                <div className="portfolio__card-img image-sr"></div>
                <p className="portfolio__card-skilltype">Machine Learning</p>
                <p className="portfolio__card-title">Image super-resolution using deep neural networks</p>
                <p className="portfolio__card-description">
                    This document presents the methods for image super-resolution using artificial neural networks. The approaches are compared and evaluated with
                    interpolation-based scaling methods such as nearest neighbor, bilinear interpolation and bicubic interpolation.
                </p>
                <p className="portfolioe__card-readmore">Read more</p>
            </div>
        </div>
    )
}

export default Portfolio