import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./project.css"
import { FaGithub, FaLink } from "react-icons/fa";
import { project } from "./ProjectDetail"


const Project = () => {
    return (
        <>
            <Navbar color="project" />
            <div className="main-conatiner">
                <h1>Projects</h1>
            </div>

            {
                project.map((item, index) => {
                    return <div className="wrapper" key={index}>
                        <div className="img-wrapper">
                            <img src={item.img} alt="groww" />
                        </div>
                        <div className="detail-wrapper">
                            <h1>{item.name}</h1>
                            <h3>{item.detail}</h3>
                            <button><a href={item.demo} target="_blank" rel="noreferrer"><FaLink />   Demo</a></button>
                            <button><a href={item.github} target="_blank" rel="noreferrer"><FaGithub />   Github</a></button>
                            <div className="teck-stack">
                                {
                                    item.teck_stack.map((el, index) => {
                                        return <p key={index}>{el}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                })
            }



        </>
    )
}

export { Project }

