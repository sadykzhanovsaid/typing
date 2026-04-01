import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"
import {useTheme} from "@/hooks/useTheme.jsx"
import {useTyping} from "@/hooks/useTyping.jsx"

import Header from "@/layout/header/Header.jsx"

import HeartIcon from "@/assets/heart.png"

function Layout() {
    const typing = useTyping()
    const theme = useTheme()

    return (
        <>
            <Header started={typing.started} theme={theme}/>

            <Outlet context={{typing, theme}}/>

            <div className={`copyright ${typing.started ? "active" : ""}`}>
                <div className="container">
                    <div className="copyright__box">
                        <p className="copyright__title">Copyright 2026 @ Said Sadykzhanov</p>
                        <p className="copyright__title">
                            <>Created with</>
                            <img src={HeartIcon} alt="icon"/>
                            <>using ReactJS and deployed on Vercel</>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout