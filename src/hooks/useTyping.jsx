import {useEffect, useState, useRef} from "react"
import {generateWorlds} from "@/utils/generateWorlds.jsx"

export function useTyping() {
    const [text, setText] = useState(generateWorlds())
    const [typed, setTyped] = useState([])
    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)
    const [errors, setErrors] = useState(0)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)

    const idleTimer = useRef(null)

    const startedRef = useRef(started)
    const finishedRef = useRef(finished)
    const textRef = useRef(text)

    useEffect(() => {
        startedRef.current = started
        finishedRef.current = finished
        textRef.current = text
    }, [started, finished, text])

    useEffect(() => {
        function handleKeyDown(e) {
            const key = e.key

            if (finishedRef.current) return

            if (key === " ") {
                e.preventDefault()
            }

            if (key === "Shift" || key === "Alt" || key === "Control") return

            if (idleTimer.current) {
                clearTimeout(idleTimer.current)
            }

            idleTimer.current = setTimeout(() => {
                if (!finishedRef.current) {
                    setStarted(false)
                }
            }, 3000)

            if (!startedRef.current) {
                setStarted(true)
                setStartTime(Date.now())
            }

            if (key === "Backspace") {
                setTyped((prev) => prev.slice(0, -1))
                return
            }

            if (key.length > 1) return

            setTyped((prev) => {
                const index = prev.length

                if (key !== textRef.current[index]) {
                    setErrors((e) => e + 1)
                }

                const newTyped = [...prev, key]

                if (
                    newTyped.length === textRef.current.length &&
                    textRef.current.length > 0 &&
                    !finishedRef.current
                ) {
                    setFinished(true)
                    setEndTime(Date.now())
                    setStarted(false)
                }

                return newTyped
            })
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    useEffect(() => {
        return () => {
            if (idleTimer.current) {
                clearTimeout(idleTimer.current)
            }
        };
    }, [])

    function newText() {
        setText(generateWorlds())
        setTyped([])
        setStarted(false)
        setFinished(false)
        setErrors(0)
        setStartTime(null)
        setEndTime(null)

        if (idleTimer.current) {
            clearTimeout(idleTimer.current)
        }
    }

    const time =
        startTime && endTime
            ? ((endTime - startTime) / 1000).toFixed(2)
            : 0;

    return {
        text,
        typed,
        started,
        finished,
        newText,
        errors,
        time,
    };
}