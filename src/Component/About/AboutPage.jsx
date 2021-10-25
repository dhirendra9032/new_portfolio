import React from 'react'
import Navbar from "../Navbar/Navbar";
import about from "../About/about.png"

import "./about.css"

const AboutPage = ({handleMenu,setMenu}) => {
    return (
        <div>
            <Navbar color={"about"} />
            <div className="wrapper">
            <div className="image"><img src={about} alt="aboutimage" /></div>
                <div className="detail">
                    <h1>About Me</h1>
                    <p>I am an Aspiring full-stack web developer learning MERN Stack in Masai school. I am passionate about coding and capable of writing efficient code using MERN Stack. Ambitious to work and collaborated with others dedicated developers. <br/>
                        Eager to take up a responsible role within an exciting and inpiring organization, and want to deliver products that offer a great user experience.</p>
                </div>
            </div>
           
               
        </div>
    )
}

export default AboutPage
