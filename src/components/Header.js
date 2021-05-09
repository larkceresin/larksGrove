import React from "react";
import { NavLink } from "react-router-dom"
import logo from '../images/logo.jpg';
export default function Header() {
    return <header class="header">
        <NavLink exact to="/" className="header__image"><img src={logo} alt="Lark's Grove" className="logo" /></NavLink>
        <nav className="header__list">

           <NavLink to="/about" className="header__list-item" activeClassName="selected">About</NavLink>
            <NavLink to="/portfolio" className="header__list-item" activeClassName="selected">Portfolio</NavLink>
           {/* <NavLink to="/blog" className="header__list-item" activeClassName="selected">Blog</NavLink>*/}
            <NavLink to="/contact" className="header__list-item" activeClassName="selected">Contact</NavLink>
        
        </nav>
    </header >
}