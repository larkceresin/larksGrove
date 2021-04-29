import React from "react";
import persona from '../images/Persona.png'
export default function About() {
return(
    <div className="two-columns">
        <div className="column">
            <h2>About Me</h2>
            <p>I'm a problem solver.</p>
            <p>I'm passionate about creating, learning, and helping people. In my process of figuring out different ways to do those: I stumbled into development. My passion took me on a journey where I now have a variety of degrees and certifications in different fields:</p>
            <ul className="list">
                <li>A.S. in Culinology</li>
                <li>B.A. in English with minor in Science, Technology, and Society</li>
                <li>Massage Therapist and Health Educator</li>
                <li>Graduate Studies in Business Administration</li>
                <li>Graduate Studies in Healthcare Management</li>
                <li>Web Developer</li>
                <li>UI/UX Designer</li>
            </ul>
            <p> As a conglomeration of a variety of backgrounds: I'm on a mission to share my various passions, and find ways to put different ones together.</p>
        </div>
        <div className="column">
            <h3>Personal Information</h3>
            <ul className="list">
                <li><span>Name:</span> Jenna P. Toff</li>
                <li><span>Location:</span> Bay Area, CA</li>
                <li><span>Email:</span> <a href="mailto:jennatoff@comcast.net">jennatoff@comcast.net</a></li>
                <li><span>Phone:</span><a href="tel:8483915777">848-391-5777</a></li>
            </ul>
        <img className="section__main-image" src={persona} alt="female in gear"/>
        </div>
    </div>
    
)
}