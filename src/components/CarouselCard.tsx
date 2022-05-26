import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// <----------------- import types --------------------->
import type { CourseDetailsDisplayType } from "types/course.type";

// <----------------- import icons --------------------->
import { Icon } from "components/Icon";

// <----------------- import components -------------------->
import { Button } from "components/formComponents/Button";

// <----------------- import format number components ---------------->
import NumberFormat from "react-number-format";


// <----------------- import react spring ---------------------->
import { useSpring, animated } from 'react-spring'


type CourseCardPropsType = {
    item: CourseDetailsDisplayType;
    rows: number;
};

export const CarouselCard: React.FC<CourseCardPropsType> = React.memo(
    ({ item, rows }) => {
        // <-------------------------- defined initial variables ---------------------------->
        const [activeToDo, setActiveToDo] = useState({
            isActive: false,
            activeIndex: -1,
        });
        const navigation = useNavigate();
        const location = useLocation();
        const fadeStyle = useSpring({
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            opacity: 1
        })

        // <--------------------------- functions ------------------------------->
        const handleHover = (payload: CourseDetailsDisplayType, rows: number) => {
            const { isActive, activeIndex } = activeToDo;
            if (activeIndex === rows && isActive) {
                setActiveToDo((prev) => ({
                    ...prev,
                    isActive: false,
                    activeIndex: -1,
                }));
            } else {
                setActiveToDo((prev) => ({
                    ...prev,
                    isActive: true,
                    activeIndex: rows,
                }));
            }
        };

        return (
            <article
                className={`grid grid-col-1 h-full bg-container-primary-color rounded-md transition duration-200 ease-in-out hover:shadow-2xl hover:transform hover:scale-105`}
                onMouseOver={() => handleHover(item, rows)}
                onMouseOut={() => handleHover(item, rows)}
            >
                <figure className="relative block w-full h-full">
                    <animated.div
                        className={`absolute w-full h-full rounded-t-md transition duration-300 ease-in-out bg-container-second-color bg-opacity-40 z-20 ${
                            activeToDo.activeIndex === rows &&
                            activeToDo.isActive
                                ? `invisible`
                                : `visible`
                        }`}
                        style={fadeStyle}
                    />
                    <img
                        className="block w-full h-full rounded-md object-cover object-center z-10"
                        src={item.coursePicture}
                        alt={item.coursePicture}
                    />
                </figure>
            </article>
        );
    }
);

