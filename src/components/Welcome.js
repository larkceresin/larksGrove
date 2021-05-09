import React from "react";
import persona from '../images/Persona.png'

export default function Welcome() {
    return (
        <>
        <div className="two-columns">
            <div className="column">
                <h1>Welcome to the Grove!</h1>
                <h2>I'm Jenna</h2>
                <p>I'm a problem solver who likes to build things: like this website.</p>
            </div>
            <div className="column">
        <img src={persona} className="section__main-image" alt="animated woman sitting in the middle of a gear. A lightbulb is hanging down from the gear next to her inside. She is looking at a laptop on her lap. The woman is wearing glasses, hair in a bun, and a shirt with triangles"/>
        </div>
        </div>


        </>
    )
}