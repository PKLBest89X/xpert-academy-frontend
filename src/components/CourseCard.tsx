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

type CourseCardPropsType = {
    item: CourseDetailsDisplayType;
    rows: number;
};

export const CourseCard: React.FC<CourseCardPropsType> = React.memo(
    ({ item, rows }) => {
        // <---------------- defined initial variables --------------->
        const [activeToDo, setActiveToDo] = useState({
            isActive: false,
            activeIndex: -1,
        });
        const navigate = useNavigate();
        const location = useLocation();

        // <------------- functions ----------->
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
                className="grid grid-rows-1 bg-container-primary-color shadow-md rounded-md transition duration-200 ease-in-out hover:shadow-2xl hover:transform hover:scale-105"
                onMouseOver={() => handleHover(item, rows)}
                onMouseOut={() => handleHover(item, rows)}
                key={item.courseId}
                onClick={() =>
                    navigate(`/courses/${item.courseId}`, {
                        state: { from: location },
                    })
                }
            >
                <figure className="relative block w-full">
                    <div
                        className={`absolute w-full h-full rounded-t-md transition duration-300 ease-in-out bg-second-color bg-opacity-40 z-20 ${
                            activeToDo.activeIndex === rows &&
                            activeToDo.isActive
                                ? `visible`
                                : `invisible`
                        }`}
                    />
                    <img
                        className="block w-full h-full rounded-t-md object-cover object-center z-10"
                        src={item.coursePicture}
                        alt={item.courseName}
                    />
                </figure>
                <section className="p-4">
                    <div className={`flex flex-col gap-4 bg-body-color`}>
                        <h2
                            className={`text-title-color text-xl font-semibold`}
                        >
                            {item.courseName}
                        </h2>
                        <div className="relative h-16">
                            <div
                                className={`absolute flex justify-between items-center transition duration-200 ease-in-out transform w-full h-full ${
                                    activeToDo.isActive &&
                                    activeToDo.activeIndex === rows
                                        ? `invisible -translate-y-10`
                                        : `visible translate-y-0`
                                }`}
                            >
                                <div className="flex flex-col">
                                    <p className="text-text-color">
                                        {item.teacher}
                                    </p>
                                    <NumberFormat
                                        value={item.coursePrice}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        suffix={` ກີບ`}
                                        renderText={(value) => (
                                            <span className="text-second-color">
                                                <span className="text-text-color">
                                                    ລາຄາ:{" "}
                                                </span>
                                                {value}
                                            </span>
                                        )}
                                    />
                                </div>
                                <div className="inline">
                                    <Icon
                                        icon={"users"}
                                        className={`text-text-color`}
                                    />
                                    <NumberFormat
                                        value={item.userRegis}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        suffix={` ຄົນ`}
                                        renderText={(value) => (
                                            <span
                                                className={`text-text-color ml-2`}
                                            >
                                                {`${value}` || "0"}
                                            </span>
                                        )}
                                    />
                                </div>
                            </div>
                            <div
                                className={`absolute transition duration-300 ease-in-out transform ${
                                    activeToDo.activeIndex === rows &&
                                    activeToDo.isActive
                                        ? `visible flex justify-between items-center w-full h-full translate-y-0 gap-4`
                                        : `invisible translate-y-full`
                                }`}
                            >
                                <NumberFormat
                                    value={item.coursePrice}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={" ກີບ"}
                                    renderText={(value) => (
                                        <span className="text-second-color">
                                            <span className="text-text-color">
                                                ລາຄາ:{" "}
                                            </span>
                                            {value}
                                        </span>
                                    )}
                                />
                                <Button
                                    text="ໃສ່ກະຕ່າ"
                                    leftIcon={"basket-shopping"}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
);
