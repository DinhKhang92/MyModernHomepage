import React from "react"

import "./Home.css"
import CV from "./assets/Khang_Dinh_CV.pdf"
import HomeCard from "./HomeCard"

import homeCardData from "./data/homeCardData"

class Home extends React.Component{
    render(){

        const homeCards = homeCardData.map(function(card){
            return <HomeCard key={card.id} card={card}/>
        })

        return(
            <main className="content-body">
                <div className="topbar green-lg"></div>
                <h3 className="page-label green-font"> Hi, I'm Khang Dinh </h3>
                <div className="home__grid-container">
                    <section className="home__header">
                        <div className="home__profile-pic"></div>
                        <div className="home__header-text">
                            <h1 className="home__title">Software-Developer who loves challenges</h1>
                            <h2 className="home__subtitle">With experience in machine learning, mobile-app development and web-development</h2>
                            <a className="home__download-cv" href={CV} download>download CV</a>
                        </div>
                    </section>
                    <section className="home__cards">
                        {homeCards}
                    </section>
                </div>
            </main>
        )
    }
}

export default Home