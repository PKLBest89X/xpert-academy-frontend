import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAos = () => {
    useEffect(() => {
        let isMounted = true;
        isMounted &&
            AOS.init({
                duration: 1000,
            });
        return () => {
            isMounted = false;
        };
    }, []);
};
