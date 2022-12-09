import React from "react";
import sideLogo from "../assets/reactjs-icon.png";
export default function Main() {
    return (
        <main className="main">
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was First released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Was well over 100k stars in github</li>
                <li>Is maintianed by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}