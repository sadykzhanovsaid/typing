import { useEffect, useState } from "react"

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme")

        if (saved) return saved

        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        return systemDark ? "dark" : "light"
    })

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    function toggleTheme() {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    return { theme, toggleTheme }
}