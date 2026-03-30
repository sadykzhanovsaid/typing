import React from "react"
import "./Layout.css"
import {Outlet} from "react-router-dom"

import Header from "@/layout/header/Header.jsx"

import HeartIcon from "@/assets/heart.png"

function Layout() {
    return (
        <>
            <Header/>

            <Outlet/>

            <div className="copyright">
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