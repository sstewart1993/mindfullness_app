import React from "react";

const NavBar = (props) => {

    return(

        <header className="nav-bar">
            <a href="/"><h1> App Name </h1> </a>
            <ul className="nav-bar-links">
                <li className="nav-link">
                    <a href="/entry">Daily Check-In</a>
                </li>
                <li className="nav-link">
                    <a href="/diary">Diary</a>
                </li>
                <li className="nav-link">
                    <a href="/meditation">Quick Meditation</a>
                </li>
            </ul>
        </header>
    )

}

export default NavBar;