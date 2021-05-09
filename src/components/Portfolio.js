import React from "react";
import website from '../images/website.png';
import { useState } from 'react';


export default function Portfolio() {
    const projects = [
        {
            title: "NewsExplorer",
            code: "https://github.com/larkceresin/news-explorer",
            screenshot: "https://i.imgur.com/ziX6peT.png",
            demo: "https://www.youtube.com/watch?v=qZHzTWTiyHU",
            techStack: "React, Node, MongoDB, GCP, Express, NewsApi",
            description: "A search tool that finds recent articles by searched for keyword. Registered users can save a collection of articles to return to at a later time."
        },
        {
            title: "SmartSun",
            code: "https://github.com/carinyperez/smart_sun",
            screenshot: "https://i.imgur.com/wjTngRO.png",
            demo: "https://www.youtube.com/watch?v=0IqjL5q7lmM",
            techStack: "Particle IoT, React, Node, MongoDB, Express, AirVisual",
            description: "Created for the GirlsInTech 2021 Hackathon: A sun exposure tracker used to calculate the amount of vitamin D being produced by the end user. It uses geolocation tracking with an IoT device to determine the user's location for weather and air quality information to suggest going out, or other ways to get Vitamin D for the day."
        },
    ]
    const [image, setImage] = useState('')
    const [codeUrl, setCodeUrl] = useState('')
    const [demoUrl, setDemoUrl] = useState('')
    const [techStack, setTechStack] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    function onCardClick({ title, code, screenshot, demo, techStack, description }) {
        setTitle(title)
        setImage(screenshot)
        setCodeUrl(code)
        setDemoUrl(demo)
        setTechStack(techStack)
        setDescription(description)
        setIsModalOpen(true)
    }
    function onModalClick() {
        setIsModalOpen(false)
    }
    return (
        <div className="two-columns">
            <div className="column">
                <img className="section__main-image" src={website} alt="Storefront but icons" />
            </div>

            <div className="column">
                <h2>Portfolio</h2>
                <div className="blob"><p className="blob__name" >Web Development</p></div>
                <ul className="list">
                    {projects.map((project) => {
                        return (<li onClick={() => onCardClick(project)} className="portfolio__list-item">
                            
                            <img className="portfolio__image" src={project.screenshot} alt={project.title} />
                            
                        </li>)

                    })}
                </ul>
                               <div className={isModalOpen ? "modal modal_open" : "modal"} onClick={onModalClick}>
                    <div className="modal__content">
                        <div className="two-columns">
                            <img className="section__main-image" src={image} alt={title} />
                            <div className="column">
                                <h3 className="portfolio__text">{title}</h3>
                            <p className="portfolio__text">{description}</p>
                            
                            <p className="portfolio__text"><a href={codeUrl}>Code</a> <a href={demoUrl}>Demo</a></p>
                            <p className="portfolio__text portfolio__text_description"><i>Created with: </i> {techStack}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}