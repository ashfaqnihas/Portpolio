import React, {Element} from 'react-scroll'
import Experiance from '../ExperianceBox/Experiance'
import './ExperianceContant.css'

const ExperianceContant = () => {
    return (
        <div>
            <Element className="experianceContant" id="exp">
               <h1>Experiance</h1>
               <div className="experianceContant_box">
                   <Experiance number="+10" title="Clients" />
                <Experiance number="60+" title="Project" style={{backgroundColor:"#f64c08"}} />
                   <Experiance number="6+" title="Year Teaching" />
                   <Experiance number="60000+" title="Students" />
               </div>
            </Element>
        </div>
    )
};

export default ExperianceContant
