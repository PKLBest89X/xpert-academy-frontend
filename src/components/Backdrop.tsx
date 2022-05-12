import React, { useState } from "react";

// <--------------- import react spring -------------->
import { animated, useSpring, config } from "react-spring";

type BackdropPropsType = {
    active: boolean;
    handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Backdrop: React.FC<BackdropPropsType> = React.memo(
    ({ active, handleClick }) => {
        // <------------------- defined initial variables -------------->
        const [fade, setFade] = useState<boolean>(false);
        const props = useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            reset: true,
            config: config.molasses,
            onRest: () => setFade(!fade),
          })

        // <-------------------- functions ------------------------>

        return (
            <animated.div
                className={`${
                    active ? `block` : `hidden`
                } fixed w-full h-screen transition-opacity duration-300 ease-in-out z-40 bg-container-second-color bg-opacity-20`}
                onClick={handleClick}
                style={props}
            />
        );
    }
);

export default Backdrop;
