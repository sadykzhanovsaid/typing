import React from "react"
import "./App.css"
import "./vars.css"
import {Route, Routes} from "react-router-dom"

import Layout from "@/layout/Layout.jsx"
import Speed from "@/pages/speed/Speed.jsx"

function App() {
    return (
        <div className="application">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Speed/>}/>
                    <Route path="/test" element={<p>test</p>}/>
                    <Route path="*" element={<p>404</p>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App