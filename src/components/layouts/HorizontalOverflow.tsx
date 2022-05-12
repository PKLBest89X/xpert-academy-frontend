import React from "react";

type PropsType = {
    children: React.ReactNode;
};

export const HorizontalOverflow: React.FC<PropsType> = ({ children }) => {
    return (
        <div className="relative w-full flex flex-1 overflow-hidden">
            <div className="flex justify-center items-center flex-1 overflow-hidden shadow-lg">
                <div className="relative flex-1 w-full overflow-x-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};
