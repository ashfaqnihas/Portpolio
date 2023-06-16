import React from 'react'
import TopContant from '../Topcontent/TopContant';
import "../Components/TopContainer.css";
import {Element} from "react-scroll";

const TopContainer = () => {
    return (
    <Element name="about" className="Topconatiner">
 <TopContant />
    </Element>
          
      
    )
}

export default TopContainer
