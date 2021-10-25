import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./skills.css"
import { frontend } from './images'





export const Skills = () => {
    return (
        <div>
            <Navbar color="skills" />
            <div className="heading">
                <h1>Technical Skills</h1>
            </div>
            <div className="skills">
                {
                    frontend.map((item, index) => {
                        return <div>
                            <img src={item.img} alt="png" />
                            <p>{item.name}</p>
                        </div>
                    })
                }


            </div>

        </div>
    )
}
