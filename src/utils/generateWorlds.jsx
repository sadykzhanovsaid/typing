import {worlds} from "@/data.jsx"

export function generateWorlds(count = 30) {
    let result = []

    for (let i = 0; i < count; i++) {
        const word = worlds[Math.floor(Math.random() * worlds.length)]
        result.push(word)
    }

    return result.join(" ")
}