import { useEffect } from "react";

type PropsType = {
    title: string;
};

export const useTitle = ({ title }: PropsType) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};
