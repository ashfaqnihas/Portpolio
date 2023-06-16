import React from 'react'
import {Element} from 'react-scroll';
import skillimg from "../photos/skillimg.png"
import  LinearProgress from '@material-ui/core/LinearProgress';
import "../SkillContainer/SkillContainer.css"

const SkillContainer = () => {
    return (
       <Element className="skillcontainer" id="skill">
          <div className="skillcontainer_img">
              <img src={skillimg} alt= ""/>
          </div>
          <div className="skillcontainer_text">
              <h2>SKILLSET</h2>
              <div className="skill_set">
                   <h5>React</h5>
                   <div className="skillset_1" >
                          <LinearProgress variant="determinate" value={90} />
                   </div>
              </div>
              <div className="skill_set">
                   <h5>Laravel</h5>
                   <div className="skillset_6" >
                          <LinearProgress variant="determinate" value={85} />
                   </div>
              </div>
              <div className="skill_set">
                   <h5>Java</h5>
                   <div className="skillset_5" >
                          <LinearProgress variant="determinate" value={80} />
                   </div>
              </div>
              <div className="skill_set">
                   <h5>React-Native</h5>
                   <div className="skillset_2" >
                          <LinearProgress variant="determinate" value={60} />
                   </div>
              </div>
              <div className="skill_set">
                   <h5>Java Script</h5>
                   <div className="skillset_3" >
                          <LinearProgress variant="determinate" value={90} />
                   </div>
              </div>
              <div className="skill_set">
                   <h5>Python</h5>
                   <div className="skillset_4" >
                          <LinearProgress variant="determinate" value={50} />
                   </div>
              </div>
              <div className="skill_set">
                   <h5>PHP</h5>
                   <div className="skillset_4" >
                          <LinearProgress variant="determinate" value={50} />
                   </div>
              </div>
              
              
          </div>
       </Element>
    )
}

export default SkillContainer
