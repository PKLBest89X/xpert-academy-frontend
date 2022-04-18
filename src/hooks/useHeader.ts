import { useEffect, useState } from "react";

export const useHeader = () => {
    const [offset, setOffset] = useState<number>(0);
    const [scrollActive, setScrollActive] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up function
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (offset > 65) setScrollActive(true);
        return () => setScrollActive(false);
    }, [offset]);
    return { scrollActive };
};
