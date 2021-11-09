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
            <div className="homebtn"><button><a href="https://export-download.canva.com/G02bU/DAEvJHG02bU/861/0-11863128096.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20211109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211109T064812Z&X-Amz-Expires=40105&X-Amz-Signature=e9d6328972a00730e5551ffecb41ddace3e838e9d7190d6cdeeaadc129a6c495&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Dhirendra%2520Kumar%2520Resume.pdf&response-expires=Tue%2C%2009%20Nov%202021%2017%3A56%3A37%20GMT">Download CV</a></button></div>
        </div>
    )
}

export default Detail
