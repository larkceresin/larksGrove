import React from "react";
import facebook from '../images/facebook.svg';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';

export default function Footer() {
    return <footer class="footer">
        <ul className="footer__list">
            <li>&#169; 2021 Jenna Toff</li>
            <li>Let's Get Social:
                <ul className="footer__list">
                    <li><a href="https://www.linkedin.com/in/jenna-toff/" rel="noreferrer" target="_blank" ><img src={linkedin} alt="LinkedIn"></img></a></li>
                    <li><a href="https://github.com/larkceresin" rel="noreferrer" target="_blank"><img src={github} alt="GitHub"></img></a></li>
                    <li><a href="https://www.facebook.com/shamanlvr" rel="noreferrer" target="_blank"><img src={facebook} alt="Facebook"></img></a></li>
                    <li><a href="https://twitter.com/shamanlvr" rel="noreferrer" target="_blank"><img src={twitter} alt="Twitter"></img></a></li>
                    <li><a href="https://www.instagram.com/lark_ceresin/" rel="noreferrer" target="_blank"><img src={instagram} alt="Instagram"></img></a></li>
                </ul>
            </li>

        </ul>
    </footer>
}