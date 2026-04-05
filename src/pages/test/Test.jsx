import React from "react"
import "./Test.css"

import Mac from "@/pages/test/mac/Mac.jsx"
import Windows from "@/pages/test/windows/Windows.jsx"

function Test() {
    return (
        <main className="test">
            <Mac/>
            <Windows/>
        </main>
    );
}

export default Test