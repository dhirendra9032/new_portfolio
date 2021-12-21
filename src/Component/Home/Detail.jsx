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
            <div className="homebtn"><button><a href="https://export-download.canva.com/G02bU/DAEvJHG02bU/1295/0-15025636016.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20211220%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211220T192528Z&X-Amz-Expires=50910&X-Amz-Signature=bf5c842546708cc60bc1209a47bf067c782ed058ef84e8923b819bb9ee406fa4&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Dhirendra%2520Kumar%2520Resume.pdf&response-expires=Tue%2C%2021%20Dec%202021%2009%3A33%3A58%20GMT">Download CV</a></button></div>
        </div>
    )
}

export default Detail
