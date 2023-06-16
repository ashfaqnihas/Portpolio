import React from 'react'
import "../ProjectContainer/ProjectContant.css";
import {Element} from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContant.css"

const ProjectContant = () => {
    
    const projects = [
        {
            img:"https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.2107962391.1629388800",
             title:"facebook",
             desc:"The continued development and maintenance of Material-UI is made possible by these generous sponsors:",
             link:"www.google.com",
         },
        {
           img:"https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.2107962391.1629388800",
            title:"facebook",
            desc:"The continued development and maintenance of Material-UI is made possible by these generous sponsors:",
            link:"www.google.com",
        },
        {
            img:"https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.2107962391.1629388800",
             title:"facebook",
             desc:"The continued development and maintenance of Material-UI is made possible by these generous sponsors:",
             link:"www.google.com",
         },
         {
            img:"https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.2107962391.1629388800",
             title:"facebook",
             desc:"The continued development and maintenance of Material-UI is made possible by these generous sponsors:",
             link:"www.google.com",
         },
         {
            img:"https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.2107962391.1629388800",
             title:"facebook",
             desc:"The continued development and maintenance of Material-UI is made possible by these generous sponsors:",
             link:"www.google.com",
         },
         {
            img:"https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.2107962391.1629388800",
             title:"facebook",
             desc:"The continued development and maintenance of Material-UI is made possible by these generous sponsors:",
             link:"www.google.com",
         },
    ]

    return (
       <Element className="projectcontainer" id="project" >
           <h1>My Projects</h1>
           <p>Here I explain my done project in the career which is develop for my client </p>
           <div className="projectcontainer_project">
              {projects.map((project, index) => {
                  return (
                      <Project 
                      key={index}
                      img={project.img}
                      title={project.title}
                      desc={project.desc}
                      link={project.link}
                    />
                  );
              })}
           </div>
       </Element>
    )
}

export default ProjectContant
