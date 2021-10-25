import React from 'react'

import { FaLinkedin, FaGithubSquare,FaTwitterSquare } from "react-icons/fa";
import avatar from "./avatar.png"


import "./home.css"

const Detail = () => {
    return (
        <div className="datail-section">
           <div className="img-holder">
               <img src={avatar} alt="logo"/>
           </div>
            <h1>Hi! Welcome To My Portfolio</h1>
            <h2>I'M DHIRENDRA KUMAR</h2>
            <div className="slider">
                Full-Stack Web Developer
            </div>
           
            <div className="social-media-contact-link"><a href="https://github.com/dhirendra9032" target="_blank" rel="noreferrer" ><FaGithubSquare className="git"/></a>
            <a href="https://www.linkedin.com/in/dhirendra-kumar-9b6986148/" target="_blank" rel="noreferrer"><FaLinkedin className="linkedin"/></a>
            <a href="https://twitter.com/dhirendrakr9032" target="_blank" rel="noreferrer"><FaTwitterSquare/></a>
            </div>
            <div className="homebtn"><button><a href="https://drive.google.com/uc?export=download&id=1T0Au1Tv_C8P5Ad7qo7zTg5ht1u0bds9Y">Download CV</a></button></div>
        </div>
    )
}

export default Detail
