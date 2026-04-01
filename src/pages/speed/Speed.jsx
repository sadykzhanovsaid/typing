import React, {useRef, useEffect} from "react"
import "./Speed.css"
import {useOutletContext} from "react-router-dom"

import {RiRestartLine} from "react-icons/ri"
import TimeIcon from "@/assets/time.svg?react"
import ErrorIcon from "@/assets/error.svg?react"

function Speed() {
    const {typing, theme} = useOutletContext()

    const cursorRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const el = document.querySelector(
            `[data-index="${Math.min(typing.typed.length, typing.text.length - 1)}"]`
        );

        if (el && cursorRef.current && containerRef.current) {
            const rect = el.getBoundingClientRect()
            const parentRect = containerRef.current.getBoundingClientRect()

            cursorRef.current.style.transform = `translate(
      ${rect.left - parentRect.left}px,
      ${rect.top - parentRect.top + 2}px
    )`

            cursorRef.current.style.height = `${rect.height}px`
        }
    }, [typing.typed.length, typing.text])

    return (
        <main className="speed">
            <section className="typing">
                <div className="container">
                    <div className="typing__box">
                        <div
                            ref={containerRef}
                        >
                            {!typing.finished && (
                                <div
                                    ref={cursorRef}
                                    className={`typing__cursor ${!typing.started ? "blink" : ""}`}
                                />
                            )}

                            <p className="typing__title">
                                {typing.text.split("").map((char, index) => {
                                    let color = theme.theme === "dark" ? "#242426" : "#EBEBEB"

                                    if (index < typing.typed.length) {
                                        color = typing.typed[index] === char ? null : "#fe4233"
                                    }

                                    return <span key={index} data-index={index} style={{color}}>{char}</span>
                                })}
                            </p>
                        </div>

                        <div className="typing__other">
                            <div className={`typing__result ${typing.finished ? "active" : ""}`}>
                                <p>
                                    <TimeIcon/>
                                    {typing.time}s
                                </p>
                                <p>
                                    <ErrorIcon/>
                                    {typing.errors}
                                </p>
                            </div>

                            <button type="button" className={`typing__restart ${typing.started ? "active" : ""}`}
                                    onClick={() => typing.newText()}>
                                <RiRestartLine/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Speed