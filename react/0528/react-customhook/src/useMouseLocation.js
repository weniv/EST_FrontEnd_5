import { useEffect, useState } from "react"

export function useMouseLocation() {

    const [mouseLocation, setMouseLocation] = useState({
        x: null,
        y: null
    });

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            setMouseLocation({ x: event.x, y: event.y });
        })
    }, []);

    return mouseLocation
}