import { useEffect, useState, useRef } from "react";

export function useScrollObserver() {
    const [isBottom, setIsBottom] = useState(false);
    const endLineRef = useRef(null);

    useEffect(() => {
        const endLine = document.createElement('div');
        endLine.style.height = '10px';
        document.body.append(endLine);
        endLineRef.current = endLine;

        const option = {
            root: null,
            rootMargin: '10px',
            theshold: 1
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                setIsBottom(entry.isIntersecting)
            });
        }

        const observer = new IntersectionObserver(callback, option);

        observer.observe(endLine);

        return () => {
            observer.unobserve(endLine);

            if (endLineRef.current) {
                endLineRef.current.remove();
                // document.body.removeChild(endLineRef.current);
            }
        }
    }, []);

    return isBottom
}