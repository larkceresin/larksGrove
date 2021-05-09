import React from "react";
import jenna from '../images/jenna.jpg'
export default function About() {
    return (
        <>
        <div className="two-columns">
            <div className="column"><img className="section__main-image" src={jenna} alt="Jenna Toff dressed in peasant renaissance garb: a dark orange floppy hat with a flower attached to it. A beige chemise with a dark green bodice that has a maroon centerpiece. A bright red badge with a white Maltese cross centered on it. A dark green skirt matching the bodice.
Behind her there is a flag with the same red and white Maltese cross and various woods criss-crossing to make a banister. There are various ribbons tied to the banister of different colors. There is a white building in the far back with tables between the banister and the building. The ground is dirt, the sun is shining." /></div>

            <div className="column">
                <h2 className="about__header">Jenna Page Toff</h2>
                <p className="about__subheader">Front-End Developer & Designer</p>
                <a href="./contact"><button className="about__button">Contact Me</button></a>
                <div className="about__text-area">
                    <p>I've been through a lot of different fields:  Swimming Pools, Entertainment, Maintenance,  Hospitality, Education, Health Care, Retail. Different parts of each of those have stayed with me. I've learned a lot through all the formal education I've taken: even though it's not directly related to positions I've been in.</p>
                    <p>When Covid-19 hit: I was a massage therapist who was learning a bit about creating websites as an escape to something more mentally challenging rather than physically and emotionally demanding. I jumped fully into learning web development when shelter-in-place and quarantine restrictions prevented me from doing my day job.</p>
                    <p>I enrolled in Practicum x Yandex's Web Developer program. In the course of 9 months I went from knowing very basic HTML and CSS, to being very proficient in creating things with HTML, CSS, Vanilla JavaScript, React.js, Node.js, Express.js, MongoDB, and being able to unit test, and utilize various cloud services. Something I would probably still be struggling through on my own.</p>
                    <p>I also became an Assistant Tutor, and ambassador with the program. I teamed up with other members that started with me and created a discord server that now has 15+ class cohorts that I manage and assist with issues on. I helped other students as they struggled through things I struggled with, assisted with the Pair Programing Program that started after my graduation, and have started writing a technical blog with hopes of a larger outreach of people to help on this journey.</p>
                    <p>After finishing the program I've been spending time learning UI/UX Development, Java, and Python while transitioning to massaging some of the time and creating as a developer full-time.</p>
                </div>
                <h3>Some Interesting Facts:</h3>
                <ul className="list list_header">
                    <li>I annually work at the NorCal Renaissance Faire (pictured left)</li>
                    <li>I'm an avid photographer, and mostly take pictures of landscapes.</li>
                    <li>I've considered becoming a Food Stylist</li>
                    <li>I started writing short stories when I was 10 (nothing published... yet.)</li>
                    <li>I moved to California in 2016 without ever having been further west than Pennsylvania prior.</li>
                    <li>The first time I went on a plane was to China.</li>
                    <li>When I have the time I enjoy going out on long bike rides.</li>
                </ul>

            </div>
        </div>



    </>

    )
}