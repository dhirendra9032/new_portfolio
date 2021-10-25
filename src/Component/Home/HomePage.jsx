import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./home.css"
import "../Navbar/Navbar.css"
import avatar from "./avatarrr.png"
import Detail from './Detail'

const Home = ({handleMenu,showMediaIcons}) => {
    return (
        <>
        <Navbar color="home"/>
        <div onClick={handleMenu} className="main-container">
            <div className="detail-container">
            <Detail/>
            </div>
            <div className="avatar">
              <img src={avatar} alt="profile"/>
            </div>
            
        </div>
        </>
    )
}

export {Home}
