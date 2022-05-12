import React, { FC } from "react";
import { routingUserData } from "./navigationData";
import { NavLink, NavLinkProps } from "react-router-dom";

// <----------------- import icon ---------------------->
import { AiOutlineClose } from "react-icons/ai";

// <--------------- import hooks ------------------->
import { useAppSelector } from "hooks/useRedux";
import { useOverflow } from "hooks/effects/useOverflow";

type UserNavigationType = {
    scrollActive: boolean;
    pathname: string;
    toggle: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
};

const UserNavigation: FC<UserNavigationType> = ({
    scrollActive,
    pathname,
    toggle,
}) => {
    const { smDown } = useAppSelector((state) => state.toggle);

    // <--------------- defined hooks --------------->
    useOverflow({ action: smDown });

    // <-------------------- functions ------------------------->

    return (
        <div
            className={`fixed left-0 md:relative w-full transition-all duration-500 ease-in-out md:rounded-none z-20 gap-8 ${
                smDown
                    ? `${
                          scrollActive ? `top-0` : `top-[-1rem]`
                      } shadow-lg bg-container-primary-color p-4`
                    : `top-[calc(-100%-4rem)] shadow-none`
            }`}
        >
            {smDown && (
                <div className="">
                    <AiOutlineClose
                        className={`text-lg ${
                            scrollActive || pathname !== "/"
                                ? `text-text-color hover:text-primary-color after:bg-primary-color`
                                : smDown
                                ? `text-text-color hover:text-primary-color`
                                : `text-body-color hover:text-body-color after:bg-body-color`
                        }`}
                        onClick={toggle}
                    />
                </div>
            )}
            <ul className="md:flex gap-6 md:gap-4 lg:gap-6">
                {routingUserData.map((items, index) => (
                    <li key={index} className="whitespace-nowrap">
                        <NavLink
                            className={({ isActive }) =>
                                `relative text-left after:contents-[""] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:transform after:scale-0 after:origin-bottom-right after:transition after:duration-300 after:ease-in-out hover:after:transform hover:after:scale-100 hover:after:origin-bottom-left ${
                                    scrollActive || pathname !== "/"
                                        ? `text-text-color hover:text-primary-color after:bg-primary-color ${isActive && `after:w-full after:h-[2px] after:bottom-0 after:left-0 after:scale-100 text-primary-color`}`
                                        : smDown
                                        ? `text-text-color hover:text-primary-color after:bg-primary-color ${isActive && `after:w-full after:h-[2px] after:bottom-0 after:left-0 after:scale-100 text-primary-color`}`
                                        : `text-body-color hover:text-body-color after:bg-body-color ${isActive && `after:w-full after:h-[2px] after:bottom-0 after:left-0 after:scale-100 text-body-color`}`
                                }`
                            }
                            key={index}
                            to={items.path}
                            state={{
                                from: {
                                    pathname: items.path,
                                },
                            }}
                        >
                            {items.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserNavigation;
