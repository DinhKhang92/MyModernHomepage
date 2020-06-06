import React from "react"

import "./Skills.css"

function Skills(){
    return(
        <div className="skills__body">
            <div className="skills__bar"></div>
            <h3 className="skills__current-page">
                Skills
            </h3>
            <div className="skills__card">
                <div className="skills__card-icon web-development"></div>
                <h3 className="skills__card-title">Web Development</h3>
                <ul className="skills__card-skills">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
            <div className="skills__card">
                <div className="skills__card-icon app-development"></div>
                <h3 className="skills__card-title">App Development</h3>
                <ul className="skills__card-skills">
                    <li>Flutter</li>
                    <li>Dart</li>
                    <li>JSON</li>
                    <li>NoSQL</li>
                    <li>Google Firebase</li>
                </ul>
            </div>
            <div className="skills__card">
                <div className="skills__card-icon desktop-applications"></div>
                <h3 className="skills__card-title">Desktop Applications</h3>
                <ul className="skills__card-skills">
                    <li>Python</li>
                    <li>C++</li>
                    <li>Matlab</li>
                    <li>Java</li>
                    <li>Qt5</li>
                    <li>Git</li>
                </ul>
            </div>
            <div className="skills__card">
                <div className="skills__card-icon machine-learning"></div>
                <h3 className="skills__card-title">Machine Learning</h3>
                <ul className="skills__card-skills">
                    <li>Python</li>
                    <li>Tensorflow/Keras</li>
                    <li>scikit-learn</li>
                    <li>pandas</li>
                    <li>Deep Learning</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills