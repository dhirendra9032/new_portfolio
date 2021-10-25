import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./contact.css"
import { FaEnvelope, FaPhone, FaMapMarked, FaGithubSquare, FaLinkedin, FaTwitterSquare, } from "react-icons/fa";


const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <Navbar color="contact" />
            <div className="main-conatainer">
                <div className="info-holder">
                    <div className="heading"><p>Contacts</p></div>
                    <div><span><FaEnvelope /></span>  dhirendra9032@gmail.com</div>
                    <div><span><FaPhone /> </span>  +91 8604390422</div>
                    <div><span><FaMapMarked /> </span>  Barabanki, Uttar Pradesh, 225203</div>
                    <div className="social-media-contacts">
                        <a href="https://github.com/dhirendra9032" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                        <a href="https://www.linkedin.com/in/dhirendra-kumar-9b6986148/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://twitter.com/dhirendrakr9032" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
                    </div>
                </div>
                <div className="form-holder">
                    <form action="#">
                        <input
                            onChange={(e) => (setName(e.target.value))}
                            value={name}
                            type="text"
                            placeholder="Enter your name"
                        />
                        <input
                            onChange={(e) => (setEmail(e.target.value))}
                            value={email}
                            type="text"
                            placeholder="example@gmail.com"
                        />
                        <textarea
                            onChange={(e) => (setMessage(e.target.value))}
                            value={message}
                            cols="30" rows="10"
                            placeholder="Write your message here"></textarea>

                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export { ContactPage }