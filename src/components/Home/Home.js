import React from "react"

import "./Home.css"
import CV from "./assets/Khang_Dinh_CV.pdf"

class Home extends React.Component{
    
    downloadCvClickHandler = () => {
        console.log("download")
    }

    render(){
        return(
            <div className="home__body">
                <div className="home__bar"></div>
                <h3 className="home__my-name">
                    Hi, I'm Khang Dinh
                </h3>
                <div className="home__profile-pic"></div>
                <h1 className="home__title">Software-Developer who loves challenges</h1>
                <h2 className="home__subtitle">With experience in machine learning, mobile-app development and web-development</h2>
                <div className="home__download-cv"><a href={CV} download>download CV</a></div>
                <div className="home__card1">
                    <div className="home__card-pentagon autodidact"></div>
                    <h3 className="home__card-title">Autodidact</h3>
                    <p className="home__card-description">Working on various software projects in my off-time</p>
                </div>
                <div className="home__card1">
                    <div className="home__card-pentagon teamplayer"></div>
                    <h3 className="home__card-title">teamplayer</h3>
                    <p className="home__card-description">Listening and being part of a team is where I'm at</p>
                </div>
                <div className="home__card1">
                    <div className="home__card-pentagon quality"></div>
                    <h3 className="home__card-title">quality</h3>
                    <p className="home__card-description">Making sure that the high quality standards are always met</p>
                </div>
            </div>
        )
    }
}

export default Home