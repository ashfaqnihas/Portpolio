
//import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
//import {Facebook} from '@material-ui/core'
//import FacebookIcon from '@material-ui/icons/Facebook';
//import InstagramIcon from '@material-ui/icons/Instagram';
//import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Contact.css"

const Contact = () => {
    return (
       <Element className="contact" id="contact">
           <h1>Contact</h1>
           <div className="contact_container">
               <p>
                   Email: <span>mnashfaqahamed@gmail.com</span>
               </p>
               <p>
                   Github username : <span>https://github.com/ashfaqnihas</span>
               </p>
               {/* <div className="contact_icons">
               <a href="google.com">
                    <IconButton>
                          <FacebookIcon />
                    </IconButton>
               </a>
               </div> */}
           </div>

       </Element>
    )
}

export default Contact
