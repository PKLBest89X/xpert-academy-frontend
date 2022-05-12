import { useLayoutEffect } from "react";

type OverflowPropsType = {
    action: boolean;
};

export const useOverflow = ({ action }: OverflowPropsType): void => {
    useLayoutEffect(() => {
        if (action) document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [action]);
};
