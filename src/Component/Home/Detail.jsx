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
            <div className="homebtn"><button><a href="https://export-download.canva.com/G02bU/DAEvJHG02bU/1161/0-12017586060.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20211111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211111T092536Z&X-Amz-Expires=12014&X-Amz-Signature=d8357c19ac165a5d159319504d65950aa633d9aef5c9b26546060c55882c82d8&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Dhirendra%2520Kumar%2520Resume.pdf&response-expires=Thu%2C%2011%20Nov%202021%2012%3A45%3A50%20GMT">Download CV</a></button></div>
        </div>
    )
}

export default Detail
