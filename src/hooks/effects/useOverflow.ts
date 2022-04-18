import { useLayoutEffect } from "react";

export const useOverflow = () => {
    useLayoutEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [])
}