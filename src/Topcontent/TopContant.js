import React from 'react'
import { Link } from 'react-scroll'
import "../Topcontent/TopContant.css";

const TopContant = () => {
    return (
        <div className="Topcontant">
            <div className="Topcontant__container">
                <h4>Mr. Ashfaq Ahamed</h4>
                <p>A professional web and mobile developer</p>
                <br></br>
                <a href="www.google.com"> 
                     <button className="Topcontand__downlodeButton">Downlode cv</button>
                </a>
                <Link to="projects" smooth={true} duration={5000}>
                   <button className="Topcontand__myWorkButton">My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default TopContant
