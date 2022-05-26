import React, { useState } from "react";

// <--------------- import react spring -------------->
import { animated, useSpring, config } from "react-spring";

// <--------------- import types --------------------->
import type { VisibleFadeType } from "types/actions.type";

type BackdropPropsType = {
    visibleStatus: VisibleFadeType;
    handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    animationEnd: (event: React.AnimationEvent<HTMLDivElement>) => void;
};

const Backdrop: React.FC<BackdropPropsType> = React.memo(
    ({ visibleStatus, handleClick, animationEnd }) => {
        // <------------------- defined initial variables -------------->
        const props = useSpring({
            opacity: 1,
            from: { opacity: 0 },
        });

        // <-------------------- functions ------------------------>

        return (
            <animated.div
                className={`fixed top-0 left-0 transition duration-500 ease-in bg-backdrop-color bg-opacity-20 z-40 overflow-hidden w-full h-full ${
                    visibleStatus === "inactive" && `animate-fadeOut`
                } `}
                onClick={handleClick}
                onAnimationEnd={animationEnd}
                style={props}
            />
        );
    }
);

export default Backdrop;
