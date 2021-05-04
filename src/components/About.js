import React from "react";
import persona from '../images/Persona.png'
export default function About() {
    return (
        <div className="two-columns">
            <div className="column">
                <h3>What I'm Up To</h3>
                <ul className="list">
                    <li></li>
                </ul>
            </div>
            <div className="column">
                <h3>Personal Information</h3>
                <ul className="list">
                    <li><span>Name:</span> Jenna P. Toff</li>
                    <li><span>Location:</span> Bay Area, CA</li>
                    <li><span>Email:</span> <a href="mailto:jennatoff@comcast.net">jennatoff@comcast.net</a></li>
                    <li><span>Phone:</span><a href="tel:8483915777">848-391-5777</a></li>
                </ul>
                <img className="section__main-image" src={persona} alt="female in gear" />
            </div>
        </div>

    )
}