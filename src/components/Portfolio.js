import React from "react";
import website from '../images/website.png';
import {Link} from "react-router-dom"
export default function Portfolio() {
return(
    <div className="two-columns">
        <div className="column">
        <img className="section__main-image" src={website} alt="Storefront but icons"/>
        </div>

        <div className="column">
            <h2>Portfolio</h2>
            <div className="blob"><Link className="blob__name" to="/webProjects">Web Development</Link></div>
            <div className="blob"><Link className="blob__name" to="/uiux">UI / UX Designs</Link></div>
        </div>
    </div>
    
)
}