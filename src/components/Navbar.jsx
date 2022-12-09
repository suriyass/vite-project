import React from "react";
import logo from '../assets/react-logo-small.svg'
export default function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="react" className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className ="nav--title">React Course-Project 1</h4>
       </nav>
    )
}