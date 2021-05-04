import React from "react";
import website from '../images/website.png';


export default function Portfolio() {
    const projects = [
        {
            title: "NewsExplorer",
            code:"https://github.com/larkceresin/news-explorer",
            screenshot:"https://i.imgur.com/ziX6peT.png",
            demo:"https://www.youtube.com/watch?v=qZHzTWTiyHU",
            techStack:"React, Node, MongoDB, GCP, Express, NewsApi",
            description:"A search tool that finds recent articles by searched for keyword. Registered users can save a collection of articles to return to at a later time."
        },
        {
            title: "SmartSun",
            code:"https://github.com/carinyperez/smart_sun",
            screenshot:"https://i.imgur.com/wjTngRO.png",
            demo:"https://www.youtube.com/watch?v=0IqjL5q7lmM",
            techStack:"Particle IoT, React, Node, MongoDB, Express, AirVisual",
            description:"Created for the GirlsInTech 2021 Hackathon: A sun exposure tracker used to calculate the amount of vitamin D being produced by the end user. It uses geolocation tracking with an IoT device to determine the user's location for weather and air quality information to suggest going out, or other ways to get Vitamin D for the day."
        },
    ]
    return (
        <div className="two-columns">
            <div className="column">
                <img className="section__main-image" src={website} alt="Storefront but icons" />
            </div>

            <div className="column">
                <h2>Portfolio</h2>
                <div className="blob"><p className="blob__name" >Web Development</p></div>
                <ul className="list">
                {projects.map((project)=>{
                    return(<li className="portfolio__list-item">
                        <h3 className="portfolio__text">{project.title}</h3>
                        <p className="portfolio__text portfolio__text_description">{project.description}</p>
                        <img className="portfolio__image" src={project.screenshot} alt={project.title}/>
                        <p className="portfolio__text"><a href={project.code}>Code</a> <a href={project.demo}>Demo</a></p>
                        <p className="portfolio__text"><i>Created with: </i> {project.techStack}</p>
                    </li>)

                })}
                </ul>
                {/*<div className="blob"><p className="blob__name" >UI / UX Designs</p></div>*/}
            </div>
        </div>

    )
}