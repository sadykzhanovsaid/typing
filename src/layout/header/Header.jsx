import React from "react"
import "./Header.css"
import {Link, NavLink} from "react-router-dom"

import LightIcon from "@/assets/light.svg?react"
import DarkIcon from "@/assets/dark.svg?react"
import GithubIcon from "@/assets/github.svg?react"

function Header({started, theme}) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <Link to="/" className={`header__title ${started ? "active" : ""}`}>About Typing</Link>

                    <div className={`header__other ${started ? "active" : ""}`}>
                        <ul className="header__list">
                            <NavLink className="header__link" to="/">Speed Type</NavLink>
                            <NavLink className="header__link" to="/test">Keyboard Test</NavLink>
                        </ul>
                        <button className="header__theme" onClick={() => theme.toggleTheme()}>
                            {theme.theme === "dark" ? <DarkIcon/> : <LightIcon/>}
                        </button>
                        <a target="_blank" href="https://github.com/sadykzhanovsaid" className="header__github">
                            <GithubIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header