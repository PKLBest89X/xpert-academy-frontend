import { useEffect } from "react";

type OverflowPropsType = {
    action: boolean;
};

export const useOverflow = ({ action }: OverflowPropsType): void => {
    useEffect(() => {
        let isMounted = true
        if (action && isMounted) document.body.style.overflowY = "hidden";
        return () => {
            isMounted = false;
            document.body.style.overflowY = "auto";
        };
    }, [action]);
};
