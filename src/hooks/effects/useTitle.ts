import { useEffect } from "react";

type PropsType = {
    title: string;
};

export const useTitle = ({ title }: PropsType) => {
    useEffect(() => {
        let isMounted = true;
        if (isMounted) document.title = title; 
        return () => {
            isMounted = false;
        }
    }, [title]);
};
