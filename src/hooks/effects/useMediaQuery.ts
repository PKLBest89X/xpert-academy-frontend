import { useState, useEffect } from "react";

export const useMediaQuery = (initalQuery: string) => {
    const [query, setQuery] = useState(initalQuery);
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (!query) return;
        const listener = (media: MediaQueryListEvent) => {
            setMatches(media.matches);
        };
        const media = window.matchMedia(query);
        setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => {
            media.removeEventListener("change", listener);
        };
    }, [query]);

    return { matches, setQuery } as const;
};
