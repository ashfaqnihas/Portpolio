import React from 'react';
import {Link} from 'react-scroll';
import "../Components/header.css"

const Header = () => {
    return (
        <div className="header">
        <div className="header__left">
            <h1>Develop<span>er</span></h1>
        </div>
            <div className="header__right">
<Link to="about" smooth={true} duration={500}>
    <h4>About Me</h4>
</Link>
<Link to="skill" smooth={true} duration={500}>
    <h4>Skill</h4>
</Link>
<Link to="project" smooth={true} duration={500}>
    <h4>Project</h4>
</Link>
<Link to="exp" smooth={true} duration={500}>
    <h4>Experiance</h4>
</Link>
<Link to="contact" smooth={true} duration={500}>
    <h4>Contact</h4>
</Link>
<h4 className="header__rightButton">Joint with Me</h4>
            </div>
        </div>
    )
}

export default Header
