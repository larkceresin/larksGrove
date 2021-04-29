import React from "react";
import mother from '../images/mother.png'
export default function Welcome() {
    return (<>
        <h1 className="section__heading section__heading_welcome">Welcome to the grove!</h1>
        <div className="two-columns">
            <div className="column">
                <ul className="list">
                    <li><b>Services:</b>
                        <ul>
                            <li>Web Development</li>
                            <li>Web Design</li>
                            <li>Content Creation</li>
                </ul>
                </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <img className="section__main-image" src={mother} alt="Woman holding a globe" />
        </div>
    </>
    )
}